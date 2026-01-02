function getChai(kindChai: string | number) {
  if (kindChai === "string") {
    return `making ${kindChai}`;
  }
  return `chai order: ${kindChai}`;
}

console.log(getChai("ilaichi"));

function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `Serving default masala chai`;
}

class kuladChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving cutting Chai`;
  }
}

function serve(chai: kuladChai | Cutting) {
  if (chai instanceof kuladChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving custom chai :${item}`;
}

type MaslaChai ={type:"masala"; spiceLevel:number};