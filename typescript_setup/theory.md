1. Type Annotation
Type annotation means you explicitly tell TypeScript what the type is using : type.

let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;

Arrays declaration:-
let scores: number[] = [90, 85, 88];
let names: Array<string> = ["Alice", "Bob"];


2. Type Inference
Type inference means TypeScript automatically determines the type based on the value you assign.

let age = 25;        // inferred as number
let name = "Alice"; // inferred as string
//dont need annotation
