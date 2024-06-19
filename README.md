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
   git clone https://github.com/temichelle13/uniswap-top-trades-query.git
   cd uniswap-top-trades-query
   ```
2. **Install Dependencies**:
   ```bash
   npm install axios
   ```
3. **Set Up Environment Variables**:
   Create a `.env` file in the root of the project and add your API key
     -  Open your favorite text editor, create a new file, add your API key:
        ```bash
        GRAPH_API_KEY={{your-api-key-here}}
     - Save the file
  
## Running the Script
Run the script to query the subgraph and print the formatted results:
  ```bash
node query.js
```
## Additional Notes
This project demonstrates how to interact with The Graph's GraphQL endpoint to fetch data from a subgraph. The provided query fetches the top 10 trades by volume from the Uniswap V2 subgraph on the Arbitrum network.

### Dependencies
axios: A promise-based HTTP client for Node.js
dotenv: Module to load environment variables from a .env file
### License
This project is licensed under the MIT License.
