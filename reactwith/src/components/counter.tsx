import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "10px",
        padding: "13px",
        margin:"10px"
      }}
    >
      <p>
        Objects Orderd:
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>{count}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Order products</button>
    </div>
  );
};
