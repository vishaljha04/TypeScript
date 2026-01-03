import type { Products } from "../types";
import { Card } from "./Card";

interface CardListProps {
  items: Products[];
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 1000}
        />
      ))}
    </div>
  );
};
