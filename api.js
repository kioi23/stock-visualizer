const API_KEY = "QKXX0QJKNBBJF1W4";

export async function fetchStock(symbol) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${QKXX0QJKNBBJF1W4}`
    );
    const data = await res.json();

    return data["Time Series (Daily)"];
  } catch (error) {
    console.error("Error fetching stock:", error);
  }
}