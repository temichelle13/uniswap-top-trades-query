const axios = require('axios');

// GraphQL query to fetch top 10 trades by volume
const query = `
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
`;

// Function to fetch top trades from the Uniswap subgraph
const fetchTopTrades = async () => {
  try {
    const response = await axios.post(
      'https://gateway-arbitrum.network.thegraph.com/api/0e31621d68289e6c2350f520a2a1dbe2/subgraphs/id/EYCKATKGBKLWvSfwvBjzfCBmGwYNdVkduYXVivCsLRFu',
      {
        query: query,
        variables: {}
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    const trades = response.data.data.swaps;
    trades.forEach(trade => {
      const token0Symbol = trade.pair.token0.symbol === 'unknown' ? 'Unknown Token' : trade.pair.token0.symbol;
      const token1Symbol = trade.pair.token1.symbol === 'unknown' ? 'Unknown Token' : trade.pair.token1.symbol;

      console.log(`Trade ID: ${trade.id}`);
      console.log(`  Transaction ID: ${trade.transaction.id}`);
      console.log(`  Amount (USD): ${parseFloat(trade.amountUSD).toExponential()}`);
      console.log(`  Pair: ${token0Symbol} / ${token1Symbol}`);
      console.log('---------------------------------------');
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Execute the function to fetch data
fetchTopTrades();
