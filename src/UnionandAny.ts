let subs:number | string = '1M';
//union;
let apiRequest: 'pending' | "success" |"error" = "pending";

// apiRequest = "hitesh";
let airlineSeat:'aisle' | 'window' | 'middle' = 'aisle';

const orders = ['12','20','39',43]

let currentOrder : string | undefined;

for(let order in orders){
    if(order === '20'){
        currentOrder = order;
        break;
    }
    // currentOrder = '11';
}

// currentOrder = 42;


console.log(currentOrder);