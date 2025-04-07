import { filter, firstValueFrom, mergeMap, Observable } from 'rxjs';
import {
  type Config,
  type ContractStateUpdateBlock,
  type ExtractedContractRecord,
  type StreamElementData,
} from './common-types';
import { gql } from 'graphql-tag';
import { ApolloClient } from '@apollo/client/core/ApolloClient';
import type { FetchResult, NormalizedCacheObject } from '@apollo/client';
import type { PublicDataProvider, VerifierKey } from '@midnight-ntwrk/midnight-js-types';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import WebSocket from 'ws';
import { type NetworkId, setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { InMemoryCache } from '@apollo/client/cache/inmemory/inMemoryCache';
import { map } from 'rxjs/operators';
import { ledger } from '@bricktowers/signature-registry-contract';
import { verifyContractState } from '@midnight-ntwrk/midnight-js-contracts';
import { toHex } from '@midnight-ntwrk/midnight-js-utils';

export interface SignatureRegistryStream {
  readonly contractUpdateStateStream: (blockHeight: number) => Observable<ContractStateUpdateBlock>;
}

export class SignatureRegistryStreamImpl implements SignatureRegistryStream {
  provider: PublicDataProvider;
  client: ApolloClient<NormalizedCacheObject>;
  config: Config;
  verifierKeys: Array<['register', VerifierKey]>;
  constructor(config: Config, verifierKeys: Array<['register', VerifierKey]>) {
    setNetworkId(config.networkId as NetworkId);
    this.provider = indexerPublicDataProvider(config.indexerUri, config.indexerWsUri, WebSocket);
    this.verifierKeys = verifierKeys;
    const wsLink = new GraphQLWsLink(
      createClient({
        url: config.indexerWsUri,
        webSocketImpl: WebSocket,
      }),
    );

    this.client = new ApolloClient<NormalizedCacheObject>({
      link: wsLink,
      cache: new InMemoryCache(),
    });

    this.config = config;
  }

  TXS_FROM_BLOCK_SUB = gql`
    subscription TXS_FROM_BLOCK_SUB($offset: BlockOffsetInput) {
      blocks(offset: $offset) {
        height
        hash
        transactions {
          hash
          contractCalls {
            address
          }
        }
      }
    }
  `;

  subscribeToBlocks = (height: number): Observable<FetchResult<StreamElementData>> => {
    return new Observable<FetchResult<StreamElementData>>((subscriber) => {
      this.client
        .subscribe<StreamElementData>({
          query: this.TXS_FROM_BLOCK_SUB,
          variables: { offset: { height } },
        })
        .subscribe({
          next: (value) => {
            subscriber.next(value);
          },
          error: (err) => {
            subscriber.error(err);
          },
          complete: () => {
            subscriber.complete();
          },
        });
    });
  };

  contractCallDeployments = (streamElementData: StreamElementData) => {
    return streamElementData.blocks.transactions.flatMap(
      (transaction) =>
        transaction.contractCalls
          // .filter((contractCall) => contractCall.__typename === 'ContractDeploy') // here we could only take contract deployments
          .map((contractCall) => contractCall.address.substring(2)), // address includes network-id prefix which we need to remove
    );
  };

  contractState = async (address: string) => {
    const value = firstValueFrom(this.provider.contractStateObservable(address, { type: 'latest' }));
    return await value.then((state) => ({ address, state }));
  };

  contractStates = async (address: string[]) => {
    return await Promise.all(address.map((address) => this.contractState(address)));
  };

  toContractDeploymentBlock = async (streamElementData: StreamElementData) => {
    const contractStateAddresses = await this.contractStates(this.contractCallDeployments(streamElementData));
    const contracts: ExtractedContractRecord[] = [];
    contractStateAddresses.forEach((contractStateAddress) => {
      try {
        const contractState = ledger(contractStateAddress.state.data);
        verifyContractState(this.verifierKeys, contractStateAddress.state);
        const item = {
          walletPublicKey: toHex(contractState.walletPublicKey.bytes),
          signingPublicKey: contractState.signingPublicKey,
        };
        contracts.push(item);
        console.log(`Item`, item);
      } catch (e) {
        console.warn(
          'Contract ' +
            contractStateAddress.address +
            ' at blockHeight:' +
            streamElementData.blocks.height +
            ' is not contract',
        );
      }
    });
    return {
      height: streamElementData.blocks.height,
      contracts,
    };
  };

  contractUpdateStateStream(blockHeight: number): Observable<ContractStateUpdateBlock> {
    return this.subscribeToBlocks(blockHeight).pipe(
      filter((element) => element.data != null),
      map((element) => element.data as StreamElementData),
      mergeMap((element) => this.toContractDeploymentBlock(element)),
    );
  }
}
