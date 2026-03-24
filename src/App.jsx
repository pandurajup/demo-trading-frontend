import React, { useState } from "react";

const API = "https://demo-trading-api.onrender.com";

export default function App() {
  const [symbol, setSymbol] = useState("RELIANCE.NS");
  const [result, setResult] = useState(null);

  const predict = async () => {
    const res = await fetch(`${API}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symbol }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 40 }}>
      <h1>🚀 DEMO AI Trading</h1>

      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        style={{ padding: 10, fontSize: 16 }}
      />

      <button
        onClick={predict}
        style={{ marginLeft: 10, padding: 10 }}
      >
        Predict
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Result:</h2>
          <p>Symbol: {result.symbol}</p>
          <p>Prediction: {result.prediction}</p>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}
