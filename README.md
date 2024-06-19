# Uniswap Top Trades Query

This project contains a script to query the top 10 trades by volume on the Uniswap V2 subgraph using The Graph.

## Why This Query is Useful

By analyzing the top trades by volume, users can gain insights into the most significant transactions on the Uniswap V2 platform. This information can be used for market analysis, trading strategies, and understanding liquidity flows.

## Subgraph to Query

The subgraph queried in this project is the Uniswap V2 subgraph deployed on the Arbitrum network.
[Query URL](https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/EYCKATKGBKLWvSfwvBjzfCBmGwYNdVkduYXVivCsLRFu)

## Querying the Uniswap Subgraph

To query the top 10 trades by volume on the Uniswap V2 subgraph, follow these steps:

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- An internet connection to fetch data from The Graph
- A Graph API key

## Getting an API Key

1. Go to [The Graph's Explorer](https://thegraph.com/explorer/).
2. Sign up or log in.
3. Create a new API key from your dashboard.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/temichelle13/uniswap-top-trades-query
   cd uniswap-top-trades-query
   ```
2. **Install Dependencies**:
   ```bash
   npm install axios
   ```
3. **Set Up Environment Variables**:
   - CHange the `.env.example` file to a `.env` file in the root of the project and add your API key.
   - Save the file.
  
### Running the Script
Run the script to query the subgraph and print the formatted results:
  ```bash
node query.js
```
## Example Query

```graphql
query TopTrades {
  swaps(first: 10, orderBy: amountUSD, orderDirection: desc) {
    id
    amountUSD
    transaction {
      id
    }
    pair {
      token0 {
        symbol
      }
      token1 {
        symbol
      }
    }
  }
}
```

## Result of Example Query
### Here is a sample output of the query results:
```
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-27
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: Unknown Token / 0xDEV
---------------------------------------
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-28
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: USDC / Unknown Token
---------------------------------------
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-31
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: ZKLK / Unknown Token
---------------------------------------
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-26
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: PALAI / Unknown Token
---------------------------------------
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-29
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: TPAD / Unknown Token
---------------------------------------
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-32
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: PEPE / Unknown Token
---------------------------------------
Trade ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152-30
  Transaction ID: 0x76f2546586ac5b1ba522babaa5fbbd9e65ca2047f39497b6b277a08da35cb152
  Amount (USD): 4.3981656918396856e+33
  Pair: CRYPT / Unknown Token
---------------------------------------
Trade ID: 0x310307c773fcdbfacc21dba2ed454c48511529cf9e18dfe192f4d98c53bb42de-1
  Transaction ID: 0x310307c773fcdbfacc21dba2ed454c48511529cf9e18dfe192f4d98c53bb42de
  Amount (USD): 4.3981656918396856e+33
  Pair: PEPE / Unknown Token
---------------------------------------
Trade ID: 0xea696c395092e2697212b5de2fbb00a10870286bd9a6e4fe903ca53250c55ab6-0
  Transaction ID: 0xea696c395092e2697212b5de2fbb00a10870286bd9a6e4fe903ca53250c55ab6
  Amount (USD): 1.278864171116066e+18
  Pair: TRIAS / USDC
---------------------------------------
Trade ID: 0x97a6234a8eb09a6f193d1488e94c2262a8e7ee34b0e84afdbdbbe7e2bc1b7739-0
  Transaction ID: 0x97a6234a8eb09a6f193d1488e94c2262a8e7ee34b0e84afdbdbbe7e2bc1b7739
  Amount (USD): 1.2137438260380554e+16
  Pair: $MONG / MING
---------------------------------------
```
## Additional Notes
This project demonstrates how to interact with The Graph's GraphQL endpoint to fetch data from a subgraph. The provided query fetches the top 10 trades by volume from the Uniswap V2 subgraph on the Arbitrum network.

## Dependencies
axios: A promise-based HTTP client for Node.js
dotenv: Module to load environment variables from a .env file
Repository
Visit the GitHub repository to explore the project.

License
This project is licensed under the MIT License.
