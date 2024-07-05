const axios = require('axios');
require("dotenv").config();
const fs = require('fs'); // Import the 'fs' module for file system operations

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
  console.log("Constructed URL:", url);

  try {
    const response = await axios.post(
      url,
      {
        query: query,
        variables: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GRAPH_API_KEY}`, // Include if API key is needed
        },
      },
    );

    if (response.data.errors) {
      console.error("GraphQL Errors:", response.data.errors);
      return;
    }

    const trades = response.data.data.swaps;
    const tradeData = trades.map((trade) => {
      const token0Symbol =
        trade.pair.token0.symbol === "unknown"
          ? "Unknown Token"
          : trade.pair.token0.symbol;
      const token1Symbol =
        trade.pair.token1.symbol === "unknown"
          ? "Unknown Token"
          : trade.pair.token1.symbol;

      return {
        tradeId: trade.id,
        transactionId: trade.transaction.id,
        amountUSD: parseFloat(trade.amountUSD).toExponential(),
        pair: `${token0Symbol} / ${token1Symbol}`,
      };
    });

    // Write the data to a file (append mode)
    fs.appendFile('trade_data.json', JSON.stringify(tradeData, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Trade data appended to trade_data.json");
      }
    });
  } catch (error) {
    console.error("Error Details:", error);
    if (error.response) {
      console.error("Error Response:", error.response.data);
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Axios Error:", error.message);
    }
    console.error("Error Config:", error.config);
  }
};

fetchTopTrades();