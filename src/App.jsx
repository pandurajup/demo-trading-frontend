import React, { useState } from "react";

const API = "https://demo-trading-api.onrender.com";

export default function App() {
  const [symbol, setSymbol] = useState("RELIANCE.NS");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const predict = async () => {
    setLoading(true);
    const res = await fetch(`${API}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symbol }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div style={{
      fontFamily: "Arial",
      padding: 40,
      textAlign: "center",
      background: "#0f172a",
      minHeight: "100vh",
      color: "white"
    }}>
      <h1 style={{ fontSize: 36 }}>🚀 DEMO AI Trading</h1>

      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        style={{
          padding: 12,
          fontSize: 16,
          borderRadius: 8,
          border: "none",
          width: 250
        }}
      />

      <button
        onClick={predict}
        style={{
          marginLeft: 10,
          padding: 12,
          borderRadius: 8,
          background: "#22c55e",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        {loading ? "Loading..." : "Predict"}
      </button>

      {result && (
        <div style={{
          marginTop: 30,
          background: "#1e293b",
          padding: 20,
          borderRadius: 10,
          display: "inline-block"
        }}>
          <h2>📊 Prediction Result</h2>
          <p><b>Symbol:</b> {result.symbol}</p>
          <p><b>Signal:</b> {result.prediction}</p>
          <p><b>Confidence:</b> {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}
