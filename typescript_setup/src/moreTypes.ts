let response: any = "42";

let numericLength: number = response;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my pasta"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

//type assertion
const inputElements = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";

value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

type Role = "admin" | "user" | "superAdmin";

function redirect(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role;
}
