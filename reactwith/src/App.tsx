import "./App.css";
import { Card } from "./components/Card";
import { Counter } from "./components/counter";
import type { Products } from "./types";
import { CardList } from "./components/CardList";
import Form from "./components/Form";
import { Card2 } from "./components/Card2";

const ProductsList: Products[] = [
  { id: 1, name: "headphones", price: 999 },
  { id: 2, name: "fan", price: 1999 },
  { id: 3, name: "tables", price: 999 },
];

function App() {
  return (
    <>
      <div>TypeScript Tutorial</div>
      <Card name={"Headphones"} price={5000} isSpecial={true} />
      <Counter />

      <div>
        <CardList items={ProductsList} />
      </div>

      <div>
        <Form onSubmit={(product)=>{
          console.log(`placed order ${product.name}and value ${product.products}`)
        }}/>
      </div>
      <div>
        <Card2 title="Products and Watches" footer={
          <button>Order Now</button>
        }/>
      </div>
    </>
  );
}

export default App;
