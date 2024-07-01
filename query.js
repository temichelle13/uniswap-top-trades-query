const axios = require('axios');
require('dotenv').config();

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

const fetchTopTrades = async () => {
  const url = process.env.UNISWAP_SUBGRAPH_URL;
  console.log('Constructed URL:', url);

  try {
    const response = await axios.post(
      url,
      {
        query: query,
        variables: {}
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GRAPH_API_KEY}` // Include if API key is needed
        }
      }
    );

    if (response.data.errors) {
      console.error('GraphQL Errors:', response.data.errors);
      return;
    }

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
    console.error('Error Details:', error);
    if (error.response) {
      console.error('Error Response:', error.response.data);
    } else if (error.request) {
      console.error('No Response:', error.request);
    } else {
      console.error('Axios Error:', error.message);
    }
    console.error('Error Config:', error.config);
  }
};

fetchTopTrades();