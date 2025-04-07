# Fairway Identity AMM - Midnight Network Example

This project aims to demonstrate an **Identity-backed Automated Market Maker (AMM)** built on the [Midnight Network](https://midnight.network/). The goal is to combine standard DeFi functionality with privacy-preserving identity verification features, potentially enabling use cases like Sybil-resistant liquidity pools or KYC-gated swaps.


## Overview

The core idea is to leverage Midnight's Zero-Knowledge (ZK) capabilities to allow users to interact with an AMM while optionally proving certain identity attributes (like being verified via a registry) without revealing unnecessary personal data.

## Project Structure (Monorepo)

This project is structured as a monorepo using Yarn Workspaces and Turborepo. Key packages include:

*   **Contracts:**
    *   `amm-contract`: The core Automated Market Maker logic.
    *   `signature-registry-contract`: Allows linking off-chain signing keys to wallet addresses.
    *   `ethiopia-verification-contract`: (Tentative) A contract for verifying specific credentials (e.g., Ethiopian ID).
    *   `token-contract`: A simple token contract (e.g., for use in AMM pools).
    *   `compact`: Shared Compact language utilities/compiler scripts.
*   **Backend/API:**
    *   `amm-api`: A backend service to interact with the AMM contract.
    *   `signature-registry-api`: A backend service for the signature registry.
    *   `signature-registry-indexer`: Indexes registry events from the blockchain.
*   **Frontend:**
    *   `amm-ui`: A basic user interface for interacting with the AMM.
*   **Shared:**
    *   `crypto`: Shared cryptographic utilities.

## Current Status

*   Code from `midnight-identity-main` and an AMM example have been merged into this repository's root.
*   Dependencies have been consolidated.
*   **Build is currently failing** due to issues related to workspace resolution, compiler versions, or script execution within the Turborepo/Yarn environment (See commit history for attempts).
*   Further work is needed to stabilize the build, implement deployment scripts, and fully integrate the identity and AMM components.

## Setup (Aspirational - Once Build is Fixed)

1.  **Prerequisites:**
    *   Node.js (Check `.nvmrc` for version)
    *   Yarn (`corepack enable`)
    *   Docker
    *   Midnight `compactc.bin` (Compiler v0.22.0 recommended, ensure it's in your PATH and authorized on macOS)

2.  **Clone:**
    ```bash
    git clone https://github.com/https-fairway-global/fairway-amm.git
    cd fairway-amm
    ```

3.  **Install Dependencies:**
    ```bash
    yarn install
    ```

4.  **Build:**
    ```bash
    yarn build
    ```

5.  **Run Standalone Network (Example using Docker Compose):**
    *   (Requires a suitable `docker-compose.yml` - one might exist in `signature-registry-api` or need creation)
    ```bash
    docker compose -f <your-compose-file.yml> up -d
    ```

6.  **Deploy Contracts (Example - Requires Deployment Script):**
    *   (Requires creating a deployment script similar to `examples/identity-amm/scripts/deployStandalone.ts` from previous attempts)
    ```bash
    yarn deploy:standalone 
    ```

7.  **Run UI/API:**
    *   Start the API: `yarn turbo run start --filter=@fairway/amm-api`
    *   Start the UI: `yarn turbo run dev --filter=@fairway/amm-ui`

## Contributing

Contributions are welcome once the initial structure is stabilized. Please follow standard Git workflow (fork, branch, PR).

## Disclaimer

This is experimental software built on a testnet. Do not use with real assets.
