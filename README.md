# Cairo Playground

## Setup

Follow Cairo installation setup [here](https://starknet.io/docs/quickstart.html#quickstart)

For installing on M1 chip you might need to prefix `pip3 install` commands with

```bash
CFLAGS=-I/opt/homebrew/opt/gmp/include LDFLAGS=-L/opt/homebrew/opt/gmp/lib
```

See [this](https://stackoverflow.com/questions/70749690/attributeerror-module-collections-has-no-attribute-mapping) post if having issues with python version breaking `frozendict`

## Starknet Devnet

Ensure docker is running

Run the `starknet-devnet` found [here](https://github.com/Shard-Labs/starknet-devnet)

[Docker Image](https://hub.docker.com/r/shardlabs/starknet-devnet)

```bash
docker pull shardlabs/starknet-devnet
```

```bash
docker run -p 127.0.0.1:5050:5050 shardlabs/starknet-devnet
```

Check if the network is running locally using

```
curl http://127.0.0.1:5050/is_alive
```

## Development

Enter python development environment from bash

```bash
python3.9 -m venv ~/cairo_venv
```

```bash
source ~/cairo_venv/bin/activate
```

To close python virtual env

```
deactivate
```

### Compile Test Contract

Compile all contracts using

```bash
yarn compile
```

### Deploy Test Contract

With devnet running

```bash
yarn deploy:localhost
```

### Interact with contract

Increase balance on test contract

```bash
npx hardhat starknet-invoke --starknet-network localhost --contract Contract --function increase_balance --address [CONTRACT_ADDRESS] --inputs "10" --wallet TestWallet
```

Get current balance of test contract

```bash
npx hardhat starknet-call --starknet-network localhost --contract Contract --function get_balance --address [CONTRACT_ADDRESS]  --wallet TestWallet
```
