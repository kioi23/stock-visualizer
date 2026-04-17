// api.js
// Handles all API calls (separation of concerns)

const API_KEY = "QKXX0QJKNBBJF1W4";

// Fetch stock data from Alpha Vantage API
async function fetchStockData(symbol) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );

    const data = await res.json();

    // Error handling for invalid API response
    if (!data["Time Series (Daily)"]) {
      throw new Error("Invalid stock symbol or API limit reached");
    }

    return data;

  } catch (error) {
    console.error(error);
    alert("Error fetching stock data.");
  }
}