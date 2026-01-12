//union
let subs: number | string = "123";

let apiResponse: "pending" | "success" | "error" = "pending";
apiResponse = "error";
console.log(apiResponse);

let airlineSeat: "aisle" | "window" | "middle" = "middle";
airlineSeat = "aisle";

//ANY
const orders = ["12", "24", "34", "43"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "24") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
