type ChaiCardProps = {
  name: string;
  price: number;
  isSpecial?: boolean;
};

const ChaiCard = ({ name, price, isSpecial = false }: ChaiCardProps) => {
  return (
    <div
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
      <h2 style={{ margin: 0, fontSize: "18px" }}>{name}</h2>

      <p style={{ margin: 0, fontSize: "16px", opacity: 0.9 }}>₹{price}</p>

      {isSpecial && (
        <span
          style={{
            marginTop: "6px",
            alignItems: "center",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
            border: "0.3px solid white",
          }}
        >
          ⭐ Special
        </span>
      )}
    </div>
  );
};

export default ChaiCard;
