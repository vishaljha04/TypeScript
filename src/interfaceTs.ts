type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serverChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
    water:number;
    milk:number;

}

