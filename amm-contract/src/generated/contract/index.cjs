'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.7.0';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 102211695604070082112571065507755096754575920209623522239390234855480569854275933742834077002685857629445612735086326265689167708028928n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeField();

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_2 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_3 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

class _LiquidityPool_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))))));
  }
  fromValue(value_0) {
    return {
      token0: _descriptor_0.fromValue(value_0),
      token1: _descriptor_0.fromValue(value_0),
      reserve0: _descriptor_1.fromValue(value_0),
      reserve1: _descriptor_1.fromValue(value_0),
      creator: _descriptor_0.fromValue(value_0),
      total_shares: _descriptor_1.fromValue(value_0),
      requires_verification: _descriptor_2.fromValue(value_0),
      fee: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.token0).concat(_descriptor_0.toValue(value_0.token1).concat(_descriptor_1.toValue(value_0.reserve0).concat(_descriptor_1.toValue(value_0.reserve1).concat(_descriptor_0.toValue(value_0.creator).concat(_descriptor_1.toValue(value_0.total_shares).concat(_descriptor_2.toValue(value_0.requires_verification).concat(_descriptor_3.toValue(value_0.fee))))))));
  }
}

const _descriptor_4 = new _LiquidityPool_0();

class _tuple_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment()));
  }
  fromValue(value_0) {
    return [
      _descriptor_1.fromValue(value_0),
      _descriptor_1.fromValue(value_0),
      _descriptor_1.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0[0]).concat(_descriptor_1.toValue(value_0[1]).concat(_descriptor_1.toValue(value_0[2])));
  }
}

const _descriptor_5 = new _tuple_0();

class _CurvePoint_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return {
      x: _descriptor_0.fromValue(value_0),
      y: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.x).concat(_descriptor_0.toValue(value_0.y));
  }
}

const _descriptor_6 = new _CurvePoint_0();

const _descriptor_7 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_8 = new __compactRuntime.CompactTypeBytes(32);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_8.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_8.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_8.toValue(value_0.bytes);
  }
}

const _descriptor_9 = new _ContractAddress_0();

const _descriptor_10 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    if (typeof(witnesses_0.user_secret_key) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named user_secret_key');
    this.witnesses = witnesses_0;
    this.circuits = {
      create_pool: (...args_1) => {
        if (args_1.length !== 7)
          throw new __compactRuntime.CompactError(`create_pool: expected 7 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token0_0 = args_1[1];
        const token1_0 = args_1[2];
        const initial_reserve0_0 = args_1[3];
        const initial_reserve1_0 = args_1[4];
        const requires_verification_0 = args_1[5];
        const fee_bps_0 = args_1[6];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('create_pool',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(token0_0) === 'bigint' && token0_0 >= 0 && token0_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('create_pool',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'Field',
                                      token0_0)
        if (!(typeof(token1_0) === 'bigint' && token1_0 >= 0 && token1_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('create_pool',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'Field',
                                      token1_0)
        if (!(typeof(initial_reserve0_0) === 'bigint' && initial_reserve0_0 >= 0 && initial_reserve0_0 <= 18446744073709551615n))
          __compactRuntime.type_error('create_pool',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'Uint<0..18446744073709551615>',
                                      initial_reserve0_0)
        if (!(typeof(initial_reserve1_0) === 'bigint' && initial_reserve1_0 >= 0 && initial_reserve1_0 <= 18446744073709551615n))
          __compactRuntime.type_error('create_pool',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'Uint<0..18446744073709551615>',
                                      initial_reserve1_0)
        if (!(typeof(requires_verification_0) === 'boolean'))
          __compactRuntime.type_error('create_pool',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'Boolean',
                                      requires_verification_0)
        if (!(typeof(fee_bps_0) === 'bigint' && fee_bps_0 >= 0 && fee_bps_0 <= 65535n))
          __compactRuntime.type_error('create_pool',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'src/amm.compact line 163, char 1',
                                      'Uint<0..65535>',
                                      fee_bps_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(token0_0).concat(_descriptor_0.toValue(token1_0).concat(_descriptor_1.toValue(initial_reserve0_0).concat(_descriptor_1.toValue(initial_reserve1_0).concat(_descriptor_2.toValue(requires_verification_0).concat(_descriptor_3.toValue(fee_bps_0)))))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_create_pool_0(context,
                                              partialProofData,
                                              token0_0,
                                              token1_0,
                                              initial_reserve0_0,
                                              initial_reserve1_0,
                                              requires_verification_0,
                                              fee_bps_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      swap: (...args_1) => {
        if (args_1.length !== 5)
          throw new __compactRuntime.CompactError(`swap: expected 5 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const pool_id_0 = args_1[1];
        const token_in_0 = args_1[2];
        const amount_in_0 = args_1[3];
        const min_amount_out_0 = args_1[4];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('swap',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 269, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(pool_id_0) === 'bigint' && pool_id_0 >= 0 && pool_id_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('swap',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/amm.compact line 269, char 1',
                                      'Field',
                                      pool_id_0)
        if (!(typeof(token_in_0) === 'bigint' && token_in_0 >= 0 && token_in_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('swap',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'src/amm.compact line 269, char 1',
                                      'Field',
                                      token_in_0)
        if (!(typeof(amount_in_0) === 'bigint' && amount_in_0 >= 0 && amount_in_0 <= 18446744073709551615n))
          __compactRuntime.type_error('swap',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'src/amm.compact line 269, char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount_in_0)
        if (!(typeof(min_amount_out_0) === 'bigint' && min_amount_out_0 >= 0 && min_amount_out_0 <= 18446744073709551615n))
          __compactRuntime.type_error('swap',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'src/amm.compact line 269, char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_amount_out_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(pool_id_0).concat(_descriptor_0.toValue(token_in_0).concat(_descriptor_1.toValue(amount_in_0).concat(_descriptor_1.toValue(min_amount_out_0)))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment())))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_swap_0(context,
                                       partialProofData,
                                       pool_id_0,
                                       token_in_0,
                                       amount_in_0,
                                       min_amount_out_0);
        partialProofData.output = { value: _descriptor_1.toValue(result_0), alignment: _descriptor_1.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      add_liquidity: (...args_1) => {
        if (args_1.length !== 6)
          throw new __compactRuntime.CompactError(`add_liquidity: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const pool_id_0 = args_1[1];
        const amount0_desired_0 = args_1[2];
        const amount1_desired_0 = args_1[3];
        const amount0_min_0 = args_1[4];
        const amount1_min_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('add_liquidity',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 360, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(pool_id_0) === 'bigint' && pool_id_0 >= 0 && pool_id_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('add_liquidity',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/amm.compact line 360, char 1',
                                      'Field',
                                      pool_id_0)
        if (!(typeof(amount0_desired_0) === 'bigint' && amount0_desired_0 >= 0 && amount0_desired_0 <= 18446744073709551615n))
          __compactRuntime.type_error('add_liquidity',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'src/amm.compact line 360, char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount0_desired_0)
        if (!(typeof(amount1_desired_0) === 'bigint' && amount1_desired_0 >= 0 && amount1_desired_0 <= 18446744073709551615n))
          __compactRuntime.type_error('add_liquidity',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'src/amm.compact line 360, char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount1_desired_0)
        if (!(typeof(amount0_min_0) === 'bigint' && amount0_min_0 >= 0 && amount0_min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('add_liquidity',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'src/amm.compact line 360, char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount0_min_0)
        if (!(typeof(amount1_min_0) === 'bigint' && amount1_min_0 >= 0 && amount1_min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('add_liquidity',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'src/amm.compact line 360, char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount1_min_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(pool_id_0).concat(_descriptor_1.toValue(amount0_desired_0).concat(_descriptor_1.toValue(amount1_desired_0).concat(_descriptor_1.toValue(amount0_min_0).concat(_descriptor_1.toValue(amount1_min_0))))),
            alignment: _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_add_liquidity_0(context,
                                                partialProofData,
                                                pool_id_0,
                                                amount0_desired_0,
                                                amount1_desired_0,
                                                amount0_min_0,
                                                amount1_min_0);
        partialProofData.output = { value: _descriptor_5.toValue(result_0), alignment: _descriptor_5.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      get_pool_count: (...args_1) => {
        if (args_1.length !== 1)
          throw new __compactRuntime.CompactError(`get_pool_count: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('get_pool_count',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 487, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_get_pool_count_0(context, partialProofData);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      get_pool_info: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`get_pool_info: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const pool_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('get_pool_info',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 491, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(pool_id_0) === 'bigint' && pool_id_0 >= 0 && pool_id_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('get_pool_info',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/amm.compact line 491, char 1',
                                      'Field',
                                      pool_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(pool_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_get_pool_info_0(context,
                                                partialProofData,
                                                pool_id_0);
        partialProofData.output = { value: _descriptor_4.toValue(result_0), alignment: _descriptor_4.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      get_user_shares: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`get_user_shares: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const pool_id_0 = args_1[1];
        const user_address_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('get_user_shares',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 495, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(pool_id_0) === 'bigint' && pool_id_0 >= 0 && pool_id_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('get_user_shares',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/amm.compact line 495, char 1',
                                      'Field',
                                      pool_id_0)
        if (!(typeof(user_address_0) === 'bigint' && user_address_0 >= 0 && user_address_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('get_user_shares',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'src/amm.compact line 495, char 1',
                                      'Field',
                                      user_address_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(pool_id_0).concat(_descriptor_0.toValue(user_address_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_get_user_shares_0(context,
                                                  partialProofData,
                                                  pool_id_0,
                                                  user_address_0);
        partialProofData.output = { value: _descriptor_1.toValue(result_0), alignment: _descriptor_1.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      initialize: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`initialize: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const registry_address_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('initialize',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/amm.compact line 604, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(registry_address_0) === 'bigint' && registry_address_0 >= 0 && registry_address_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('initialize',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/amm.compact line 604, char 1',
                                      'Field',
                                      registry_address_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(registry_address_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_initialize_0(context,
                                             partialProofData,
                                             registry_address_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      create_pool: this.circuits.create_pool,
      swap: this.circuits.swap,
      add_liquidity: this.circuits.add_liquidity,
      get_pool_count: this.circuits.get_pool_count,
      get_pool_info: this.circuits.get_pool_info,
      get_user_shares: this.circuits.get_user_shares,
      initialize: this.circuits.initialize
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('create_pool', new __compactRuntime.ContractOperation());
    state_0.setOperation('swap', new __compactRuntime.ContractOperation());
    state_0.setOperation('add_liquidity', new __compactRuntime.ContractOperation());
    state_0.setOperation('get_pool_count', new __compactRuntime.ContractOperation());
    state_0.setOperation('get_pool_info', new __compactRuntime.ContractOperation());
    state_0.setOperation('get_user_shares', new __compactRuntime.ContractOperation());
    state_0.setOperation('initialize', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(1n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(2n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(3n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_persistent_hash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_7, value_0);
    return result_0;
  }
  #_degrade_to_transient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  #_ec_mul_generator_0(context, partialProofData, b_0) {
    const result_0 = __compactRuntime.ecMulGenerator(b_0);
    return result_0;
  }
  #_placeholder_is_user_verified_0(context, partialProofData, user_address_0) {
    return true;
  }
  #_curve_point_to_field_0(context, partialProofData, point_0) {
    return point_0.x;
  }
  #_get_user_address_0(context, partialProofData) {
    const secret_key_0 = this.#_user_secret_key_0(context, partialProofData);
    const public_key_0 = this.#_ec_mul_generator_0(context,
                                                   partialProofData,
                                                   secret_key_0);
    return this.#_curve_point_to_field_0(context, partialProofData, public_key_0);
  }
  #_field_equals_0(context, partialProofData, a_0, b_0) { return a_0 === b_0; }
  #_generate_pool_id_0(context, partialProofData, token0_0, token1_0) {
    return this.#_degrade_to_transient_0(context,
                                         partialProofData,
                                         this.#_persistent_hash_0(context,
                                                                  partialProofData,
                                                                  [token0_0,
                                                                   token1_0]));
  }
  #_create_share_key_0(context, partialProofData, user_address_0, pool_id_0) {
    return user_address_0 + pool_id_0;
  }
  #_user_secret_key_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.user_secret_key(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= __compactRuntime.MAX_FIELD))
      __compactRuntime.type_error('user_secret_key',
                                  'return value',
                                  'src/amm.compact line 141, char 1',
                                  'Field',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  #_create_pool_0(context,
                  partialProofData,
                  token0_0,
                  token1_0,
                  initial_reserve0_0,
                  initial_reserve1_0,
                  requires_verification_0,
                  fee_bps_0)
  {
    __compactRuntime.assert(!(token0_0 === token1_0), 'Tokens must be different');
    __compactRuntime.assert(0n < initial_reserve0_0 && 0n < initial_reserve1_0,
                            'Initial reserves must be positive');
    __compactRuntime.assert(fee_bps_0 < 10000n, 'Fee must be less than 100%');
    const t0_0 = token0_0;
    const t1_0 = token1_0;
    const r0_0 = initial_reserve0_0;
    const r1_0 = initial_reserve1_0;
    const pool_id_0 = this.#_generate_pool_id_0(context,
                                                partialProofData,
                                                t0_0,
                                                t1_0);
    const existing_pool_0 = _descriptor_4.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_10.toValue(0n),
                                                                                                alignment: _descriptor_10.alignment() } }] } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_0.toValue(pool_id_0),
                                                                                                alignment: _descriptor_0.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value);
    __compactRuntime.assert(!this.#_field_equals_0(context,
                                                   partialProofData,
                                                   existing_pool_0.token0,
                                                   t0_0),
                            'Pool already exists');
    const creator_address_0 = this.#_get_user_address_0(context,
                                                        partialProofData);
    const initial_shares_0 = r0_0 + r1_0;
    __compactRuntime.assert(!(initial_shares_0 === 0n),
                            'Initial shares must be non-zero');
    const new_pool_0 = { token0: t0_0,
                         token1: t1_0,
                         reserve0: r0_0,
                         reserve1: r1_0,
                         creator: creator_address_0,
                         total_shares:
                           ((t1) => {
                             if (t1 > 18446744073709551615n)
                               throw new __compactRuntime.CompactError('src/amm.compact line 204, char 23: cast from field value to Uint value failed: ' + t1 + ' is greater than 18446744073709551615');
                             return t1;
                           })(initial_shares_0),
                         requires_verification: requires_verification_0,
                         fee: fee_bps_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_10.toValue(0n),
                                                alignment: _descriptor_10.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(pool_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(new_pool_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const current_count_0 = _descriptor_0.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_10.toValue(2n),
                                                                                                alignment: _descriptor_10.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value);
    const tmp_0 = current_count_0 + 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(2n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const share_key_0 = this.#_create_share_key_0(context,
                                                  partialProofData,
                                                  creator_address_0,
                                                  pool_id_0);
    const tmp_1 = ((t1) => {
                    if (t1 > 18446744073709551615n)
                      throw new __compactRuntime.CompactError('src/amm.compact line 217, char 35: cast from field value to Uint value failed: ' + t1 + ' is greater than 18446744073709551615');
                    return t1;
                  })(initial_shares_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_10.toValue(1n),
                                                alignment: _descriptor_10.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(share_key_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return pool_id_0;
  }
  #_verify_swap_math_with_fee_0(context,
                                partialProofData,
                                reserve_in_0,
                                reserve_out_0,
                                amount_in_0,
                                amount_out_0,
                                fee_bps_0)
  {
    const reserve_in_f_0 = reserve_in_0;
    const reserve_out_f_0 = reserve_out_0;
    const amount_in_f_0 = amount_in_0;
    const amount_out_f_0 = amount_out_0;
    const k_before_f_0 = reserve_in_f_0 * reserve_out_f_0;
    const new_reserve_in_f_0 = reserve_in_f_0 + amount_in_f_0;
    const new_reserve_out_f_0 = reserve_out_f_0 - amount_out_f_0;
    const k_after_f_0 = new_reserve_in_f_0 * new_reserve_out_f_0;
    const diff_k_0 = k_after_f_0 - k_before_f_0; return true;
  }
  #_swap_0(context,
           partialProofData,
           pool_id_0,
           token_in_0,
           amount_in_0,
           min_amount_out_0)
  {
    const pool_0 = _descriptor_4.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_10.toValue(0n),
                                                                                       alignment: _descriptor_10.alignment() } }] } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(pool_id_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            { popeq: { cached: false,
                                                                       result: undefined } }]).value);
    __compactRuntime.assert(!this.#_field_equals_0(context,
                                                   partialProofData,
                                                   pool_0.token0,
                                                   0n),
                            'Pool does not exist');
    const user_address_0 = this.#_get_user_address_0(context, partialProofData);
    if (pool_0.requires_verification) {
      const is_verified_0 = this.#_placeholder_is_user_verified_0(context,
                                                                  partialProofData,
                                                                  user_address_0);
      __compactRuntime.assert(is_verified_0,
                              'Ethiopian ID verification required for this pool');
    }
    const is_token0_in_0 = this.#_field_equals_0(context,
                                                 partialProofData,
                                                 token_in_0,
                                                 pool_0.token0);
    __compactRuntime.assert(is_token0_in_0
                            ||
                            this.#_field_equals_0(context,
                                                  partialProofData,
                                                  token_in_0,
                                                  pool_0.token1),
                            'Input token not in pool');
    const reserve_in_0 = is_token0_in_0? pool_0.reserve0 : pool_0.reserve1;
    const reserve_out_0 = is_token0_in_0? pool_0.reserve1 : pool_0.reserve0;
    const fee_basis_points_0 = pool_0.fee;
    const ten_thousand_0 = 10000n;
    let t_0;
    const fee_factor_uint_0 = (t_0 = fee_basis_points_0,
                               (__compactRuntime.assert(!(ten_thousand_0 < t_0),
                                                        'result of subtraction would be negative'),
                                ten_thousand_0 - t_0));
    const amount_in_with_fee_num_0 = ((t1) => {
                                       if (t1 > 18446744073709551615n)
                                         throw new __compactRuntime.CompactError('src/amm.compact line 300, char 36: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                       return t1;
                                     })(amount_in_0 * fee_factor_uint_0);
    const numerator_uint_0 = ((t1) => {
                               if (t1 > 18446744073709551615n)
                                 throw new __compactRuntime.CompactError('src/amm.compact line 301, char 28: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                               return t1;
                             })(amount_in_with_fee_num_0 * reserve_out_0);
    const denominator_term1_0 = ((t1) => {
                                  if (t1 > 18446744073709551615n)
                                    throw new __compactRuntime.CompactError('src/amm.compact line 302, char 31: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                  return t1;
                                })(reserve_in_0 * ten_thousand_0);
    const denominator_uint_wide_0 = denominator_term1_0
                                    +
                                    amount_in_with_fee_num_0;
    const denominator_uint_0 = ((t1) => {
                                 if (t1 > 18446744073709551615n)
                                   throw new __compactRuntime.CompactError('src/amm.compact line 304, char 30: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                 return t1;
                               })(denominator_uint_wide_0);
    __compactRuntime.assert(!(denominator_uint_0 < denominator_term1_0),
                            'Addition overflow check den2');
    const amount_out_0 = numerator_uint_0;
    __compactRuntime.assert(!(amount_out_0 < min_amount_out_0),
                            'Calculated amount_out is less than minimum required amount');
    const valid_math_0 = this.#_verify_swap_math_with_fee_0(context,
                                                            partialProofData,
                                                            reserve_in_0,
                                                            reserve_out_0,
                                                            amount_in_0,
                                                            amount_out_0,
                                                            pool_0.fee);
    __compactRuntime.assert(valid_math_0,
                            'Invalid swap math based on calculated amount_out and constant product formula with fee');
    const new_reserve_in_0 = reserve_in_0 + amount_in_0;
    const new_reserve_out_0 = (__compactRuntime.assert(!(reserve_out_0
                                                         <
                                                         amount_out_0),
                                                       'result of subtraction would be negative'),
                               reserve_out_0 - amount_out_0);
    __compactRuntime.assert(!(new_reserve_in_0 < reserve_in_0),
                            'Reserve overflow during swap addition');
    __compactRuntime.assert(!(reserve_out_0 < amount_out_0),
                            'Reserve underflow during swap subtraction');
    const updated_pool_0 = { token0: pool_0.token0,
                             token1: pool_0.token1,
                             reserve0:
                               ((t1) => {
                                 if (t1 > 18446744073709551615n)
                                   throw new __compactRuntime.CompactError('src/amm.compact line 336, char 19: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                 return t1;
                               })(is_token0_in_0?
                                  new_reserve_in_0 :
                                  new_reserve_out_0),
                             reserve1:
                               ((t1) => {
                                 if (t1 > 18446744073709551615n)
                                   throw new __compactRuntime.CompactError('src/amm.compact line 337, char 19: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                 return t1;
                               })(is_token0_in_0?
                                  new_reserve_out_0 :
                                  new_reserve_in_0),
                             creator: pool_0.creator,
                             total_shares: pool_0.total_shares,
                             requires_verification: pool_0.requires_verification,
                             fee: pool_0.fee };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_10.toValue(0n),
                                                alignment: _descriptor_10.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(pool_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_pool_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return amount_out_0;
  }
  #_add_liquidity_0(context,
                    partialProofData,
                    pool_id_0,
                    amount0_desired_0,
                    amount1_desired_0,
                    amount0_min_0,
                    amount1_min_0)
  {
    const pool_0 = _descriptor_4.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_10.toValue(0n),
                                                                                       alignment: _descriptor_10.alignment() } }] } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(pool_id_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            { popeq: { cached: false,
                                                                       result: undefined } }]).value);
    __compactRuntime.assert(!this.#_field_equals_0(context,
                                                   partialProofData,
                                                   pool_0.token0,
                                                   0n),
                            'Pool does not exist');
    const user_address_0 = this.#_get_user_address_0(context, partialProofData);
    if (pool_0.requires_verification) {
      const is_verified_0 = this.#_placeholder_is_user_verified_0(context,
                                                                  partialProofData,
                                                                  user_address_0);
      __compactRuntime.assert(is_verified_0,
                              'Ethiopian ID verification required for this pool');
    }
    const reserve0_0 = pool_0.reserve0;
    const reserve1_0 = pool_0.reserve1;
    const intermediate1_0 = ((t1) => {
                              if (t1 > 18446744073709551615n)
                                throw new __compactRuntime.CompactError('src/amm.compact line 385, char 27: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                              return t1;
                            })(amount0_desired_0 * reserve1_0);
    const optimal_amount1_0 = intermediate1_0;
    const intermediate0_0 = ((t1) => {
                              if (t1 > 18446744073709551615n)
                                throw new __compactRuntime.CompactError('src/amm.compact line 393, char 27: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                              return t1;
                            })(amount1_desired_0 * reserve0_0);
    const optimal_amount0_0 = intermediate0_0;
    const is_initial_0 = this.#_equal_0(reserve0_0, 0n)
                         ||
                         this.#_equal_1(reserve1_0, 0n);
    const use_optimal1_0 = !(amount1_desired_0 < optimal_amount1_0);
    const amount0_0 = is_initial_0?
                      amount0_desired_0 :
                      use_optimal1_0? amount0_desired_0 : optimal_amount0_0;
    const amount1_0 = is_initial_0?
                      amount1_desired_0 :
                      use_optimal1_0? optimal_amount1_0 : amount1_desired_0;
    __compactRuntime.assert(!(amount0_0 < amount0_min_0)
                            &&
                            !(amount1_0 < amount1_min_0),
                            'Amounts less than minimum required');
    const total_shares_0 = pool_0.total_shares;
    const shares_intermediate_0 = ((t1) => {
                                    if (t1 > 18446744073709551615n)
                                      throw new __compactRuntime.CompactError('src/amm.compact line 420, char 33: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                    return t1;
                                  })(amount0_0 * total_shares_0);
    const calculated_shares_approx_0 = shares_intermediate_0;
    const shares_0 = this.#_equal_2(total_shares_0, 0n)?
                     ((t1) => {
                       if (t1 > 18446744073709551615n)
                         throw new __compactRuntime.CompactError('src/amm.compact line 429, char 33: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                       return t1;
                     })(amount0_0 + amount1_0)
                     :
                     calculated_shares_approx_0;
    __compactRuntime.assert(0n < shares_0, 'Must mint positive shares');
    const share_key_0 = this.#_create_share_key_0(context,
                                                  partialProofData,
                                                  user_address_0,
                                                  pool_id_0);
    const current_shares_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_10.toValue(1n),
                                                                                                 alignment: _descriptor_10.alignment() } }] } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_0.toValue(share_key_0),
                                                                                                 alignment: _descriptor_0.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value);
    const new_user_shares_wide_0 = current_shares_0 + shares_0;
    const new_user_shares_0 = ((t1) => {
                                if (t1 > 18446744073709551615n)
                                  throw new __compactRuntime.CompactError('src/amm.compact line 439, char 29: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                return t1;
                              })(new_user_shares_wide_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_10.toValue(1n),
                                                alignment: _descriptor_10.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(share_key_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(new_user_shares_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(!(new_user_shares_0 < current_shares_0),
                            'Share overflow check');
    const new_reserve0_wide_0 = pool_0.reserve0 + amount0_0;
    const new_reserve1_wide_0 = pool_0.reserve1 + amount1_0;
    const new_total_shares_wide_0 = pool_0.total_shares + shares_0;
    const new_reserve0_0 = ((t1) => {
                             if (t1 > 18446744073709551615n)
                               throw new __compactRuntime.CompactError('src/amm.compact line 448, char 26: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                             return t1;
                           })(new_reserve0_wide_0);
    const new_reserve1_0 = ((t1) => {
                             if (t1 > 18446744073709551615n)
                               throw new __compactRuntime.CompactError('src/amm.compact line 449, char 26: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                             return t1;
                           })(new_reserve1_wide_0);
    const new_total_shares_0 = ((t1) => {
                                 if (t1 > 18446744073709551615n)
                                   throw new __compactRuntime.CompactError('src/amm.compact line 450, char 30: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                 return t1;
                               })(new_total_shares_wide_0);
    __compactRuntime.assert(!(new_reserve0_0 < pool_0.reserve0),
                            'Reserve0 overflow check');
    __compactRuntime.assert(!(new_reserve1_0 < pool_0.reserve1),
                            'Reserve1 overflow check');
    __compactRuntime.assert(!(new_total_shares_0 < pool_0.total_shares),
                            'Total shares overflow check');
    const updated_pool_0 = { token0: pool_0.token0,
                             token1: pool_0.token1,
                             reserve0: new_reserve0_0,
                             reserve1: new_reserve1_0,
                             creator: pool_0.creator,
                             total_shares: new_total_shares_0,
                             requires_verification: pool_0.requires_verification,
                             fee: pool_0.fee };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_10.toValue(0n),
                                                alignment: _descriptor_10.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(pool_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_pool_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [amount0_0, amount1_0, shares_0];
  }
  #_get_pool_count_0(context, partialProofData) {
    return _descriptor_0.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_10.toValue(2n),
                                                                               alignment: _descriptor_10.alignment() } }] } },
                                                    { popeq: { cached: false,
                                                               result: undefined } }]).value);
  }
  #_get_pool_info_0(context, partialProofData, pool_id_0) {
    return _descriptor_4.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_10.toValue(0n),
                                                                               alignment: _descriptor_10.alignment() } }] } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_0.toValue(pool_id_0),
                                                                               alignment: _descriptor_0.alignment() } }] } },
                                                    { popeq: { cached: false,
                                                               result: undefined } }]).value);
  }
  #_get_user_shares_0(context, partialProofData, pool_id_0, user_address_0) {
    const share_key_0 = this.#_create_share_key_0(context,
                                                  partialProofData,
                                                  user_address_0,
                                                  pool_id_0);
    return _descriptor_1.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_10.toValue(1n),
                                                                               alignment: _descriptor_10.alignment() } }] } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_0.toValue(share_key_0),
                                                                               alignment: _descriptor_0.alignment() } }] } },
                                                    { popeq: { cached: false,
                                                               result: undefined } }]).value);
  }
  #_initialize_0(context, partialProofData, registry_address_0) {
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(3n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(registry_address_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = 0n;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(2n),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  #_equal_0(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_1(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_2(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    pools: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`is_empty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(0n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(0n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'src/amm.compact line 19, char 1',
                                      'Field',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(0n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'src/amm.compact line 19, char 1',
                                      'Field',
                                      key_0)
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(0n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[0];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_4.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    userShares: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`is_empty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(1n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(1n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'src/amm.compact line 23, char 1',
                                      'Field',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(1n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'src/amm.compact line 23, char 1',
                                      'Field',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_10.toValue(1n),
                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_1.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get poolCount() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_10.toValue(2n),
                                                                                 alignment: _descriptor_10.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get signatureRegistryAddress() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_10.toValue(3n),
                                                                                 alignment: _descriptor_10.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  user_secret_key: (...args) => undefined
});
const pureCircuits = { };
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
