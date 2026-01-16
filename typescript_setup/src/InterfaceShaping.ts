//interfaces are used to shape and define the structure of object and class
interface Chai {
  flavour: string; //interface define strucuture of object
  price: number;
  milk?: boolean; //optional properties
}

const masalaChai: Chai = {
  //usage:-
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "Chai Bar" };

//methods in interface:-
interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

//2
interface TeaMachine {
  start(price?: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

//index signature:-
interface ChaiRating {
  [flavour: string]: number;
}

const rating: ChaiRating = {
  masala: 4.5,
  ginger: 3.5,
};

//interface merging
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "rahul",
  age: 30,
};


//interface Extending
interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}


