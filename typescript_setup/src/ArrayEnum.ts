//array define in ts
const chaiFlavours: string[] = ["AdrakChai", "IlaichiChai", "MasalaChai"];
const chaiPrices: number[] = [10, 25, 15];

//another way of definening
const rating: Array<number> = [4.5, 5.0, 3.5];

//custom data types
type Chai = {
  name: string;
  price: number;
};
//custom data type array
const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "IlaichiChai", price: 25 },
];
menu.push(); //we can use a array properties for custom datatype array

//readonly array:- once define can't modify
const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("mumbai"); Property 'push' does not exist on type 'readonly string[]'.

//multi dimensional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//tuples:-
let chaiTuple: [string, number];

chaiTuple = ["Masala", 15];
chaiTuple = ["Adrak", 25];

let userInfo: [string, number, boolean?];

userInfo = ["vishal", 200, true]; //boolean is optinal
userInfo = ["rahul", 300];

const loaction: readonly [number, number] = [28.66, 32.22];

const chaiItem: [name: string, price: number] = ["masalaChai", 20];

//Enum
enum Cupsize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = Cupsize.LARGE;

enum Status {
  PENDING = 100,
  SERVED,
  CANCELLED,
}
 