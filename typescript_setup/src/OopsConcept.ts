// class Chai {
//   flavour: string;
//   price: Number;

//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     console.log(this)
//   }
// }

// const masalaChai = new Chai("Masala");

// masalaChai.flavour = "MasalaChai";
// masalaChai.price = 15;



//Access Modifier 

class Chai{
    public flavour : string = 'Masala'

    private secretIngriedients = "Cardamom"

    reveal(){
        return this.secretIngriedients;
    }


}

const c = new Chai();

