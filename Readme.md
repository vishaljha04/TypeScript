# 📘 TypeScript Complete Guide 
## A structured, beginner-to-advanced guide to TypeScript — a strongly typed superset of JavaScript that brings static typing, better tooling, and scalability to modern web development.

## 🚀 What is TypeScript?
TypeScript is an open-source language developed by Microsoft that builds on JavaScript by adding static type definitions. It helps catch errors during development, provides better IDE support, and makes large codebases more maintainable.

✅ Key Features
- Compiles to plain JavaScript — runs anywhere JavaScript runs
- Static type checking — detects errors at compile time
- Enhanced tooling — better autocompletion, refactoring, and navigation
- Modern JavaScript support — supports ES6+ features
- Gradual adoption — you can add TypeScript gradually to existing JS projects

⚙️ Installation & Setup
1. Install TypeScript globally:
   ```bash
   npm install -g typescript
   ```
   Check version:
   ```bash
   tsc --version
   ```
2. Initialize a TypeScript project:
   ```bash
   tsc --init
   ```
   This creates a `tsconfig.json` file with default configuration.

3. Compile TypeScript files:
   ```bash
   tsc filename.ts
   ```
   Or compile with watch mode:
   ```bash
   tsc --watch
   ```
📁 Project Structure
```
├── src/
│   ├── index.ts
│   ├── types/
│   ├── utils/
│   └── models/
├── dist/               # Compiled JavaScript
├── tsconfig.json       # TypeScript configuration
├── package.json
└── README.md
```
📚 Core Concepts
🔹 Basic Types
```typescript
let username: string = "John";
let age: number = 25;
let isAdmin: boolean = true;
let nullable: null = null;
let notDefined: undefined = undefined;
let anything: any = "Can be anything"; // Avoid when possible
```
🔹 Type Inference
TypeScript automatically infers types when initialized:
```typescript
let message = "Hello"; // Inferred as string
let count = 42;        // Inferred as number
```
🔹 Arrays & Tuples
```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3];
let values: Array<number> = [1, 2, 3]; // Generic syntax

// Tuple (fixed-length array with specific types)
let user: [string, number, boolean] = ["Alice", 30, true];
```
🔹 Enums
```typescript
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentRole: Role = Role.Admin;
```
🔹 Union & Intersection Types
```typescript
// Union: value can be one of several types
let id: string | number;
id = "ABC123";
id = 123;

// Intersection: combines multiple types
type Admin = { permissions: string[] };
type User = { name: string };
type AdminUser = Admin & User;
```
🧩 Type Aliases vs Interfaces
**Type Alias**
```typescript
type User = {
  id: number;
  name: string;
  email?: string; // Optional property
};

type ID = string | number;
```
**Interface**
```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

// Interface can be extended
interface Admin extends User {
  role: string;
}
```
**Key Differences:**
- Interfaces are extendable and mergeable (declaration merging)
- Types can represent unions, intersections, and primitives
- Use interfaces for object shapes, types for complex type compositions

🛠️ Functions
**Basic Function with Types**
```typescript
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;
```
**Optional & Default Parameters**
```typescript
function greet(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}

function createUser(name: string, age?: number): User {
  return { name, age: age || 18 };
}
```
**Rest Parameters**
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
```
🏗️ Object-Oriented Programming
**Classes**
```typescript
class Person {
  // Properties
  public name: string;
  private age: number;
  protected id: string;
  readonly createdAt: Date;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = this.generateId();
    this.createdAt = new Date();
  }

  // Method
  greet(): string {
    return `Hello, I'm ${this.name}`;
  }

  // Private method
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
```
**Access Modifiers**
- `public` — accessible anywhere (default)
- `private` — accessible only within the class
- `protected` — accessible within the class and its subclasses
- `readonly` — cannot be modified after initialization

**Inheritance**
```typescript
class Employee extends Person {
  constructor(
    name: string,
    age: number,
    public department: string,
    public salary: number
  ) {
    super(name, age);
  }

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}
```
**Abstract Classes**
```typescript
abstract class Shape {
  abstract area(): number;
  
  display(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```
🧬 Generics
**Basic Generic Function**
```typescript
function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(42);
```
**Generic Constraints**
```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("Hello"); // 5
logLength([1, 2, 3]); // 3
```
**Generic Classes**
```typescript
class Container<T> {
  constructor(public value: T) {}
  
  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>("Hello");
const numberContainer = new Container<number>(100);
```
🔐 Advanced Type Features
**Type Guards**
```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows it's string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows it's number
  }
}
```
**Utility Types**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial: all properties optional
type PartialUser = Partial<User>;

// Required: all properties required
type RequiredUser = Required<User>;

// Readonly: cannot modify properties
type ReadonlyUser = Readonly<User>;

// Pick: select specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit: exclude specific properties
type UserWithoutEmail = Omit<User, "email">;

// Record: create object type with specific key/value types
type UsersById = Record<number, User>;
```
**Mapped Types**
```typescript
type Optionalize<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```
**Conditional Types**
```typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
```
📂 Modules & Namespaces
**ES6 Modules (Recommended)**
```typescript
// math.ts
export const PI = 3.14;
export function add(a: number, b: number): number {
  return a + b;
}
export default class Calculator {
  // ...
}

// main.ts
import Calculator, { PI, add } from "./math";
import * as MathUtils from "./math";
```
**Namespaces (Legacy)**
```typescript
namespace Geometry {
  export const PI = 3.14;
  
  export function area(radius: number): number {
    return PI * radius * radius;
  }
}

console.log(Geometry.area(10));
```
⚙️ Essential tsconfig.json Options
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```
🚀 Advanced Patterns
**Decorators**
```typescript
function LogClass(target: Function) {
  console.log(`Class ${target.name} created`);
}

@LogClass
class ExampleClass {
  constructor() {
    console.log("Instance created");
  }
}
```
**Mixins**
```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

class User {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

const TimestampedUser = Timestamped(User);
const user = new TimestampedUser("John");
console.log(user.timestamp);
```
**Type Predicates**
```typescript
interface Cat {
  meow(): void;
}

interface Dog {
  bark(): void;
}

function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined;
}
```
📊 TypeScript vs JavaScript Comparison

| Feature          | TypeScript                  | JavaScript             |
|------------------|-----------------------------|------------------------|
| Type System      | Static, compile-time        | Dynamic, runtime       |
| Error Detection  | During compilation          | During execution       |
| Tooling Support  | Excellent (IntelliSense)    | Basic                  |
| Learning Curve   | Moderate                    | Easy                   |
| Best For         | Large applications, teams   | Small to medium projects |
| Compilation Required | Yes                      | No                     |
🎯 Best Practices
- Avoid `any` type — use `unknown` when the type is truly uncertain
- Enable strict mode in `tsconfig.json`
- Use interfaces for public APIs, types for internal logic
- Prefer `readonly` for immutable data
- Use union types instead of enums for string literals
- Leverage utility types to avoid duplicate code
- Keep configuration in `tsconfig.json`, not in code comments

📚 Learning Resources
- [Official TypeScript Handbook](https://www.typescriptlang.org/docs/) - Comprehensive documentation
- [TypeScript Playground](https://www.typescriptlang.org/play) - Experiment with TypeScript online
- [Total TypeScript](https://www.totaltypescript.com/) - Advanced tutorials and courses
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript) - Free online book

🏁 Getting Started Checklist
- [ ] Install TypeScript globally
- [ ] Initialize project with `tsc --init`
- [ ] Configure `tsconfig.json` for your needs
- [ ] Start with basic types and interfaces
- [ ] Learn generics and utility types
- [ ] Practice with real projects
- [ ] Enable strict mode for better type safety

💡 Pro Tips
- Use `tsc --noEmit` to type-check without compiling
- VS Code has excellent TypeScript support out of the box
- Use `@types` packages for JavaScript libraries (e.g., `@types/react`)
- Consider using ESLint with TypeScript support for linting
- Regularly update TypeScript to get the latest features

🎉 Why TypeScript?
✅ Early bug detection — catch errors during development
✅ Better documentation — types serve as living documentation
✅ Enhanced developer experience — superior autocomplete and refactoring
✅ Easier maintenance — especially in large codebases
✅ Industry standard — used by Google, Microsoft, Airbnb, and many others

Remember: TypeScript is JavaScript with superpowers. Start small, gradually add types, and leverage its powerful type system to build more robust applications!

*Last updated: January 2026 | TypeScript v5.6+*