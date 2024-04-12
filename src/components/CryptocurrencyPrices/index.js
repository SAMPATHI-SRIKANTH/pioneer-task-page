import React, { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

const CryptocurrencyPrices = () => {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setPrices(response.data.bpi);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="cryptocurrency-prices">
      <h2>Cryptocurrency Prices</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {prices && (
        <div className="price-cards">
          {Object.keys(prices).map((currency) => (
            <div className="price-card" key={currency}>
              <h3>{currency}</h3>
              <p
                className="rate"
                dangerouslySetInnerHTML={{
                  __html: prices[currency].symbol + prices[currency].rate,
                }}
              ></p>
              <p>{prices[currency].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptocurrencyPrices;
