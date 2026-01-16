import "./App.css";
import ChaiCard from "./components/ChaiCard";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h1>Vite + React</h1>
        <ChaiCard name="Masala Chai" price={15} isSpecial={true} />
        <div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
