type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

interface TeaRecipe {
  water: number;
  milk: number;
}

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

//interface

interface Cupsize {
  size: "small" | "large";
}

class Chai implements Cupsize {
  size: "small" | "large" = "large";
}

//AND in TYPES
//both the typos should be available inside cup:MasalaChai in the case of &
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 20,
  masala: 3,
};

//optinal chain
type User = {
  username: string;
  bio?: string | undefined;
};

const u1: User = {
  username: "vishal",
};

const u2: User = {
  username: "rahul",
  bio: "iam a full stack developer",
};

type config = {
  readonly appName: string;
  version: number;
};

const cfg: config = {
  appName: "Master",
  version: 1.4,
};

// cfg.appName="chaidoe";  //can't assign again once assigned beacause it is readonly
