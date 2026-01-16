//GENERICS:-
//generics are templates it is used to make code resuable

function wrapInArray<T>(item: T): T[] {
  return [item];
}

//T:- it is a datatype T it can be anything like integer,string,number,booleans

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "test");
pair("masala", 20);
pair(20, 20);
pair("masala", { flavour: "Ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<string> = { content: "vishal" };
const numberBox2: Box<number> = { content: 4 };

