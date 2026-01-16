import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p style={{ fontWeight: "bold", fontSize: "17px" }}>
        Cups Ordered : <span style={{ color: "red" }}>{count}</span>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          border: "1px solid white",
          borderRadius: "12px",
          padding: "16px",
          width: "220px",
          backgroundColor: "#1e1e1e",
          color: "white",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          fontFamily: "sans-serif",
        }}
      >
        Order one more
      </button>
    </div>
  );
};
