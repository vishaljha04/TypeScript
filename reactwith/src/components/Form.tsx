import React, { useState } from "react";

interface FormProps {
  onSubmit(order: { name: string; products: number }): void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState<string>("headphones");
  const [products, setProducts] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, products });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        placeholder="Enter Name of Proucts"
      />

      <label htmlFor="name">Products</label>
      <input
        id="name"
        type="number"
        value={products}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setProducts(Number(e.target.value) || 0)
        }
        placeholder="Enter no. of Proucts"
      />
      <button type="submit">Placed Order</button>
    </form>
  );
};

export default Form;
