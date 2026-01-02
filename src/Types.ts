let response: any = "42";
let numericLength: number = response.length;

type Book = {
  name: string;
};

let bookString = {
  'name': 'Game of Thrones',
};

let bookObject= JSON.parse(bookString) as Book;
