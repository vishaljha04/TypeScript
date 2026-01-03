interface cardProp {
  name: string;
  price: number;
  isSpecial: boolean;
}

export function Card({ name, price, isSpecial = false }: cardProp) {
  return (
    <article
      style={{
        border: "1px solid white",
        borderRadius: "10px",
        padding: "13px",
      }}
    >
      <h2>
        {name} {isSpecial && <span>Special</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
