// classes in oops
class Chai {
  flavour: string;
  //   price: number;

  //   constructor(flavour: string, price: number) {
  //     this.flavour = flavour;
  //     this.price = price;
  //   }

  constructor(flavour: string) {
    this.flavour = flavour;
  }
}

const masalaChai = new Chai("Ginger");
masalaChai.flavour = "Masala";
// masalaChai.price = 15;

//access Modifiers :private,public,protected

class Chai2 {
  public flavour: string = "Elaichi";
  //access from anywhere

  private secretIngiedents = "Cardamon";

  reveal() {
    return this.secretIngiedents; //can't deirect access prviate props but can be accesss using the reveal() function
  }
}

const c = new Chai2();

//protected
class shops {
  protected shopName: string = "Chai with Masala";
  //access of protected props within class or inherit class only
}

class Branch extends shops {
  //extend :- inherit the properties from the parent class (inheritance)
  getName() {
    return this.shopName;
  }
}

class wallet {
  #balance: number = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new wallet();

class Cup {
  readonly capacity: number = 250;
  //readonly can be define only once can't change again after assigning once
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar: number = 2;
  //encapsulated class can be access using getter and setter
  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const cM = new ModernChai();
cM.sugar = 4;

//static
class Ekchai {
  static shopName = "Chaicode Caffe";

  constructor(public flavour: string) {}
}

console.log(Ekchai.shopName);

//Abstract method:-
abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("Brewing Chai");
  }
}
// class MyChai extends Drink {
//   // ❌ Error: Non-abstract class 'MyChai' does not implement 'make'
// }




