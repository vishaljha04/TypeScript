function makeChai(type: string, cups: number): string {
  return `Making ${cups} cups of ${type}`;
}

makeChai("MasalaChai", 2);

function getChaiPrice(chai: string): number | undefined {
  if (chai === "AdrakChai") {
    return 25;
  } else if (chai === "IlaichiChai") {
    return 30;
  }
  return undefined;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

