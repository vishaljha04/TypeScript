//type Narrowing

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`; //narrow down types of the chai kind
  }
  return `Chai order ${kind}`;
}

//optional ? :-
function serveChai(message?: string) {
  if (message) {
    return `Serving ${message}`;
  }
  return `Serving Default masala Chai`;
}

function orderChai(size: "medium" | "small" | "half" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  } else if (size === "medium") {
    return `make medium one...`;
  } else if ((size = "large")) {
    return `make extra chai...`;
  }
  return `chai order #${size}`;
}

class kulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(chai: kulhadChai | Cutting) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  } else return chai.serve();
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving Custom chai:${item}`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;
    case "ginger":
      return `Ginger Chai`;
      break;
    case "elaichi":
      return `Elaichi Chai`;
      break;
  }
}


