
# Hardhat Template

*Solidity 0.8.17*

This is a solidity hardhat repo template to hit the ground running with smart contract development. It includes the config for all Ethereum Mainnet, Goerli Testnet, Polygon Mainnet and Polygon Mumbai Testnet as well as helpful packages to make your life easier.

Happy Coding.

## Commands

### Compile & Build

To compile contracts run the following

```bash
yarn compile
```

To clean current compiled files and then recompile contracts use

```bash
yarn build
```

Alternatively clean the repo using

```bash
yarn clean
```

### Local Development

To spin up a local hardhat node use the following command. This will run your hardhat node on [http://localhost:8545](http://localhost:8545) with chain id `31337`

```bash
yarn dev
```

### Test

Run tests for contracts in the repo using

```bash
yarn test
```


### Coverage

Run coverage tests for contracts in the repo using

```
yarn coverage
```


### Deploy

Deploy to local hardhat environment
```bash
yarn deploy:local
```

Deploy to testnet or mainnet
``` bash
yarn deploy:goerli 
```

```bash
yarn deploy:mainnet
```

```bash
yarn deploy:mumbai
```

```bash
yarn deploy:polygon
```


### Verify

For Ethereum contract verification ensure that you have added your `ETHERSCAN_API_KEY` to `.env`. For Polygon/Mumbai contract verification ensure you have added `POLYGONSCAN_API_KEY` to `.env`. 

More info here:

- https://etherscan.io/apis
- https://polygonscan.com/apis

Verify contract by passing in the network to verify against, the contract address to verify and the constructor params used on contract deploy. This information can be found in the deployment file for the contract.

```bash 
yarn verify --network [network name] [contract address] [constructor params]
```
E.g
```bash
yarn verify --network polygon 0xPolygonContractAddress "Param 0" "Param 1"
```

## Dev Dependencies

| Package             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
|[*@nomicfoundation/hardhat-chai-matchers*](https://www.npmjs.com/package/@nomicfoundation/hardhat-chai-matchers)| Ethereum-specific capabilities for the Chai assertion library, making your smart contract tests easy to write and read.|
|[*@nomicfoundation/hardhat-network-helpers*](https://www.npmjs.com/package/@nomicfoundation/hardhat-network-helpers)| provides a set of utility functions to interact with the Hardhat Network|
|[*@nomicfoundation/hardhat-toolbox*](https://www.npmjs.com/package/@nomicfoundation/hardhat-toolbox)| bundles all the commonly used packages and Hardhat plugins to start developing with Hardhat|
|[*@nomiclabs/hardhat-ethers*](https://www.npmjs.com/package/@nomiclabs/hardhat-ethers)| Hardhat plugin for integration with ethers.js|
|[*@nomiclabs/hardhat-etherscan*](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan)|Hardhat plugin for integration with Etherscan's contract verification service|
|[*@openzeppelin/contracts*](https://www.npmjs.com/package/@openzeppelin/contracts)| A library for secure smart contract development. Build on a solid foundation of community-vetted code|
|[*@openzeppelin/hardhat-upgrades*](https://www.npmjs.com/package/@openzeppelin/hardhat-upgrades)| Hardhat plugin for deploying and managing upgradeable contracts. This package adds functions to your Hardhat scripts so you can deploy and upgrade proxies for your contracts|
|[*chai*](https://www.npmjs.com/package/chai)| Chai is a BDD / TDD assertion library for node|
|[*chai-as-promised*](https://www.npmjs.com/package/chai-as-promised)| Chai as Promised extends Chai with a fluent language for asserting facts about promises|
|[*ethers*](https://www.npmjs.com/package/ethers)| A complete Ethereum wallet implementation and utilities in JavaScript (and TypeScript)|
|[*hardhat*](https://www.npmjs.com/package/hardhat)| Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract|
|[*hardhat-deploy*](https://www.npmjs.com/package/hardhat-deploy)| Hardhat-deploy allows you to write deploy scripts for solidity contracts|
|[*hardhat-gas-reporter*](https://www.npmjs.com/package/hardhat-gas-reporter)| eth-gas-reporter plugin for hardhat|
|[*prettier-plugin-solidity*](https://www.npmjs.com/package/prettier-plugin-solidity)| A Prettier plugin for automatically formatting your Solidity code|
|[*solidity-coverage*](https://www.npmjs.com/package/solidity-coverage)| Code coverage for Solidity testing|
|[*typechain*](https://www.npmjs.com/package/typechain)| Static typing for Solidity contracts|
