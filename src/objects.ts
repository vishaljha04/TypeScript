const chai = {
  name: "masala Chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const ilaichiChai: Tea = {
  name: "ilaichiChai",
  price: 25,
  ingredients: ["ilaichi", "tea leaves", "milk", "sugar"],
};

type Cup = {
    size:string
};

let smallCup:Cup = {
    size:'500ml',
    
}