const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 24,
  isHot: true,
};
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};
const AdrakChai: Tea = {
  name: "adrak Chai",
  price: 25,
  ingredients: ["ginger", "milk", "sugar", "teaLeaf"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

type Brew = { brewTime: number };
const coffe = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffe;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "rahul09",
  password: "123456",
};

type Item = {
  name: string;
  qantity: number;
};
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

//partial:- required partail typos
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updatedChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
};
updatedChai({ price: 234 });
updatedChai({ isHot: false });

//required :- required all typos to make code execute
type ChaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
placeOrder({ name: "Adrak Chai", quantity: 2 });

//pick
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  Ingreidents: string[];
};

type BasicChaiinfo = Pick<ChaiNew, "name" | "price">;

const chaiInfo: BasicChaiinfo = {
  name: "Lemon Tea",
  price: 30,
};

//omit
type ChaiNew2={
  name: string;
  price: number;
  isHot: boolean;
  SecretIngreidents: string;
}

type PublicChai = Omit<Chai,"SecretIngreidents">;

