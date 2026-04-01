# TypeScript Tutorial Day 2: Deep Dive into Fundamentals & Practical Types

Welcome back to our TypeScript learning journey! On Day 1, we covered the absolute basics: what TypeScript is, how to set up your environment, and why static typing is a game-changer for large-scale applications. Today, we're going to roll up our sleeves and dive deeper into the fundamental building blocks of TypeScript, moving beyond simple type annotations to explore more powerful and nuanced typing features.

As an intermediate developer, you've likely encountered scenarios where basic types just don't cut it. How do you describe an object with an optional property? What's the best way to handle values that could be one of several different types? And how do you ensure your functions are robustly typed to prevent common runtime errors? This tutorial will equip you with the knowledge and practical examples to confidently tackle these challenges, making your TypeScript code more reliable, readable, and maintainable.

We'll focus on understanding core types beyond primitives, exploring how to define complex data structures using interfaces and type aliases, mastering union and intersection types for flexible data representation, and refining our understanding of functions and special types like `unknown` and `never`. By the end of this session, you'll have a stronger grasp of TypeScript's type system and be ready to apply these concepts in your real-world projects.

---

## 1. Beyond Primitive Types: `any`, `unknown`, `void`, and `never`

While `string`, `number`, ``boolean`, `null`, and `undefined` are essential, TypeScript offers powerful special types that manage uncertainty and represent specific execution flow scenarios.

### The `any` Type: A Double-Edged Sword

The `any` type is TypeScript's escape hatch. It allows a variable to hold any kind of value, and you can perform any operation on it without type checking. While it might seem convenient, `any` effectively disables TypeScript's benefits for that particular variable.

```typescript
// NOT recommended for general use!
let data: any = "Hello TypeScript";
data = 123;
data = { name: "Alice" };

console.log(data.toUpperCase()); // No error at compile time, but data is an object, so this will crash at runtime!
// TypeError: data.toUpperCase is not a function
```

**Why avoid `any`?** It undermines type safety, defeats the purpose of TypeScript, and can hide bugs that would otherwise be caught at compile time.

### The `unknown` Type: A Safer Alternative

`unknown` is a type-safe counterpart to `any`. Like `any`, a variable of type `unknown` can hold any value. However, unlike `any`, you **cannot** perform arbitrary operations on an `unknown` value without first narrowing its type. This forces you to explicitly check the type before interaction, preventing many common runtime errors.

```typescript
let userInput: unknown;

userInput = 10;
userInput = "typescript is great";

// console.log(userInput.toUpperCase()); // Error: Object is of type 'unknown'.

if (typeof userInput === 'string') {
    console.log(userInput.toUpperCase()); // OK, type is narrowed to 'string'
}

function processValue(value: unknown) {
    if (typeof value === 'number') {
        console.log(`Numeric value: ${value * 2}`);
    } else if (typeof value === 'string') {
        console.log(`String length: ${value.length}`);
    } else {
        console.log("Unhandled type");
    }
}

processValue(15);
processValue("hello");
processValue(true);
```

**When to use `unknown`:**
*   When receiving data from external sources (user input, API responses).
*   When you don't know the type of data beforehand but intend to validate it later.

### `void` and `never`: Function Return Types

#### `void`

The `void` type is used for functions that do not return any value. In JavaScript, such functions implicitly return `undefined`.

```typescript
function logMessage(message: string): void {
    console.log(message);
    // return "something"; // Error: Type 'string' is not assignable to type 'void'.
}

let result = logMessage("This is a void function.");
console.log(result); // undefined
```

#### `never`

The `never` type represents the type of values that never occur. It's typically used for functions that either:
1.  Throw an error and never return.
2.  Contain an infinite loop.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // ... do something forever ...
    }
}

// A practical example using `never` for exhaustive checking:
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
    switch (shape) {
        case "circle":
            return Math.PI; // Simplified
        case "square":
            return 10 * 10; // Simplified
        // case "triangle": // If we comment this out, TypeScript will warn us!
        //     return 0.5 * 10 * 10; // Simplified
        default:
            // This function ensures that all possible cases of 'Shape' are handled.
            // If a new Shape is added, TypeScript will flag an error here.
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// When 'triangle' is not handled, you'd get:
// Error: Type '"triangle"' is not assignable to type 'never'.
```

The `never` type is crucial for ensuring exhaustive checks in `switch` statements, especially with union types.

---

## 2. Object Types: Interfaces vs. Type Aliases

When defining the structure of objects, TypeScript offers two primary mechanisms: `interfaces` and `type` aliases. While they often seem interchangeable, they have distinct characteristics and preferred use cases.

### Declaring Object Shapes

Let's start with simple object type literals, then elevate them.

```typescript
// Object type literal
let user: {
    id: number;
    name: string;
    email?: string; // Optional property
    readonly createdAt: Date; // Readonly property
};

user = {
    id: 1,
    name: "John Doe",
    createdAt: new Date(),
};

// user.createdAt = new Date(); // Error: Cannot assign to 'createdAt' because it is a read-only property.
```

### Interfaces for Object Shapes

`Interfaces` are a way to name object types, providing a clear contract for objects. They are particularly good for defining the shape of objects, classes, and function parameters.

```typescript
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
    readonly createdAt: Date; // Readonly property
}

// Using the interface
const newUser: User = {
    id: 2,
    name: "Jane Smith",
    createdAt: new Date(),
};

// Extending an interface
interface AdminUser extends User {
    role: "admin";
    permissions: string[];
}

const admin: AdminUser = {
    id: 3,
    name: "Admin Alpha",
    createdAt: new Date(),
    role: "admin",
    permissions: ["read", "write", "delete"],
};

// Interfaces can be reopened to add new properties (declaration merging)
interface User {
    isActive: boolean;
}

const anotherUser: User = {
    id: 4,
    name: "Peter Jones",
    createdAt: new Date(),
    isActive: true, // Now required due to declaration merging
};
```

### Type Aliases for Object Shapes (and more!)

`Type aliases` also allow you to give a name to any type, not just object types. This flexibility is a key difference.

```typescript
type Product = {
    id: string;
    name: string;
    price: number;
    description?: string;
};

const product: Product = {
    id: "p123",
    name: "Laptop",
    price: 1200,
};

// Extending a type alias (using intersection types)
type DiscountedProduct = Product & {
    discountPercentage: number;
};

const saleProduct: DiscountedProduct = {
    id: "p456",
    name: "Mouse",
    price: 25,
    discountPercentage: 0.15,
};

// Type aliases cannot be reopened (no declaration merging)
// type Product = { inventory: number; } // Error: Duplicate identifier 'Product'.
```

#### When to choose which?

*   **Interfaces:** Generally preferred for defining the shape of objects, especially when you might want to implement it with classes or leverage declaration merging for extending existing types in a distributed manner (e.g., in a plugin architecture).
*   **Type Aliases:** More flexible. Use them for union types, intersection types, tuple types, primitive aliases, and when you need to define a type that is not strictly an object shape (e.g., `type ID = string | number;`). For object shapes, they are often interchangeable with interfaces, but stick to one style for consistency within a project.

---

## 3. Union and Intersection Types: Combining Types

TypeScript's type system really shines when it comes to combining existing types in powerful ways.

### Union Types (`|`): The "OR" Logic

A `union type` describes a value that can be one of several types. It's denoted by the `|` (pipe) symbol.

```typescript
type ID = number | string; // ID can be a number OR a string

function printID(id: ID) {
    console.log(`Your ID is: ${id}`);
    // console.log(id.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
                                   // Property 'toUpperCase' does not exist on type 'number'.

    // Type Narrowing: To use methods specific to one type, you must narrow the type.
    if (typeof id === 'string') {
        console.log(id.toUpperCase()); // OK, id is now known to be a string
    } else {
        console.log(id * 2); // OK, id is now known to be a number
    }
}

printID(101); // Your ID is: 101, 202
printID("abc-123"); // Your ID is: abc-123, ABC-123

// Literal Union Types: For a specific set of string or number values
type Status = "active" | "inactive" | "pending";
let currentStatus: Status = "active";
// currentStatus = "deleted"; // Error: Type '"deleted"' is not assignable to type 'Status'.
```

#### Type Narrowing Techniques:

*   `typeof`: Works for primitive types (`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`).
*   `instanceof`: Works for class instances.
*   `in` operator: Checks if a property exists on an object.
*   Equality narrowing: `===`, `!==`, `==`, `!=`
*   Discriminated unions: Using a common literal property to distinguish types in a union of objects (very powerful!).

```typescript
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
}

type Shape = Circle | Square | Triangle; // A discriminated union

function getShapeArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default:
            const _exhaustiveCheck: never = shape; // Ensures all cases are handled
            return _exhaustiveCheck;
    }
}

console.log(getShapeArea({ kind: "square", sideLength: 5 }));
```

### Intersection Types (`&`): The "AND" Logic

An `intersection type` combines multiple types into one. It describes a type that has all the properties of each intersected type.

```typescript
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type Person = HasName & HasAge; // Person must have a name AND an age

const employee: Person = {
    name: "Alice",
    age: 30,
};

// type Employee = Person & {
//     employeeId: string;
//     department: string;
// };

// const manager: Employee = {
//     name: "Bob",
//     age: 45,
//     employeeId: "E001",
//     department: "HR",
// };
```

---

## 4. Tuples and Enums: Structured Data

### Tuples: Fixed-Size, Ordered Arrays

A `tuple` is a special kind of `Array` with a fixed number of elements whose types are known and can be different. They are useful for representing a finite set of values where order matters.

```typescript
// Define a tuple type for [statusCode, statusMessage]
type HttpStatusCode = [number, string];

const ok: HttpStatusCode = [200, "OK"];
const notFound: HttpStatusCode = [404, "Not Found"];

// const invalidStatus: HttpStatusCode = ["Error", 500]; // Error: Type 'string' is not assignable to type 'number'
// const tooManyElements: HttpStatusCode = [200, "OK", "Extra"]; // Error: Source has 3 elements, target allows 2.

console.log(`Response: ${ok[0]} - ${ok[1]}`);

// Tuples with optional elements (TypeScript 4.0+)
type OptionalTuple = [string, number?];
const item1: OptionalTuple = ["apple"];
const item2: OptionalTuple = ["banana", 5];

// Tuples with rest elements (TypeScript 4.0+)
type StringNumberBool = [string, ...number[], boolean];
const data1: StringNumberBool = ["start", 1, 2, 3, true];
const data2: StringNumberBool = ["start", true];
```

Tuples are often used for returning multiple, related pieces of information from a function or for destructuring.

### Enums: Named Constants

`Enums` allow us to define a collection of named constants. They can be numeric or string-based.

#### Numeric Enums

By default, numeric enums auto-increment, starting from `0`.

```typescript
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right, // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0
console.log(Direction.Right); // 3

enum HttpMethod {
    GET = 10,
    POST,   // 11
    PUT = 20,
    DELETE, // 21
}

console.log(HttpMethod.POST); // 11
console.log(HttpMethod.DELETE); // 21
```

#### String Enums

String enums are generally preferred because they provide better readability at runtime and avoid subtle issues with numeric values.

```typescript
enum UserRole {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    VIEWER = "VIEWER",
}

function checkPermissions(role: UserRole) {
    if (role === UserRole.ADMIN) {
        console.log("Full access granted.");
    } else if (role === UserRole.EDITOR) {
        console.log("Edit access granted.");
    } else {
        console.log("View-only access.");
    }
}

checkPermissions(UserRole.EDITOR);
// console.log(UserRole.ADMIN === "ADMIN"); // true
```

#### Pitfall: Enums at Runtime

Enums are real objects that exist at runtime. This means they contribute to your bundle size, unlike `type` aliases or `interfaces` which are purely compile-time constructs.

```typescript
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

console.log(LogLevel);
/* Output:
{
  '0': 'ERROR',
  '1': 'WARN',
  '2': 'INFO',
  '3': 'DEBUG',
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3
}
*/
```

For cases where you need a fixed set of string values that *don't* need to be reflected as a runtime object, a union of string literal types is often a better choice.

```typescript
// Prefer this if you don't need the runtime object:
type UserStatus = "active" | "inactive" | "suspended";

let status: UserStatus = "active";
```

---

## 5. Function Types

TypeScript makes functions first-class citizens in its type system, allowing you to define not just their parameters and return values but also their entire signature.

### Defining Function Signatures

You can describe a function's type by specifying its parameters' types and its return type.

```typescript
// Basic function definition
function add(a: number, b: number): number {
    return a + b;
}

// Function expressions
const subtract = (a: number, b: number): number => {
    return a - b;
};

// Using a type alias for a function signature
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (x, y) => x * y;
const divide: MathOperation = (x, y) => x / y;
```

### Optional and Default Parameters

Parameters can be made optional using `?` or by providing a default value.

```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Hi")); // Hi, Bob!

function sayHello(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}

console.log(sayHello("Charlie")); // Hello, Charlie!
console.log(sayHello("David", "Greetings")); // Greetings, David!
```

**Note:** Optional parameters must come after all required parameters. Parameters with default values also become optional.

### Rest Parameters

When a function takes an indefinite number of arguments of the same type, you can use rest parameters.

```typescript
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100
```

---

## Real-World Use Cases

Here's how these fundamentals play out in a production environment:

1.  **API Data Modeling:**
    *   `Interfaces` are indispensable for defining the shape of data received from a REST API or GraphQL endpoint.
    *   `Union` types are crucial when an API field could return different types (e.g., a `data` field that is either a `string` or an `object`).
    *   `unknown` is perfect for raw API responses before validation. You receive `unknown`, then parse/validate it, narrowing its type to a specific `interface`.

    ```typescript
    interface APIResponseSuccess {
        status: "success";
        data: User | Product; // Union type for flexible data
    }

    interface APIResponseError {
        status: "error";
        message: string;
        errorCode: number;
    }

    type APIResponse = APIResponseSuccess | APIResponseError; // Discriminated union

    async function fetchData(url: string): Promise<APIResponse> {
        const response = await fetch(url);
        const data: unknown = await response.json(); // Data from API is unknown initially

        // Runtime validation and type narrowing
        if (typeof data === 'object' && data !== null && 'status' in data) {
            if (data.status === "success" && 'data' in data) {
                // Further validation for data.data might be needed
                return data as APIResponseSuccess;
            } else if (data.status === "error" && 'message' in data && 'errorCode' in data) {
                return data as APIResponseError;
            }
        }
        throw new Error("Invalid API response format");
    }
    ```

2.  **State Management in UI Frameworks (React, Vue, Angular):**
    *   `Interfaces` or `type` aliases define the shape of your application's state.
    *   `Union` types for action types in a Redux-like reducer, combined with discriminated unions for action payloads.
    *   `Enums` or string literal unions for predefined states or options (e.g., `LoadingState.LOADING`, `UserState.ACTIVE`).

    ```typescript
    // Example using discriminated unions for actions
    interface FetchStartAction {
        type: "FETCH_START";
    }

    interface FetchSuccessAction {
        type: "FETCH_SUCCESS";
        payload: { users: User[] };
    }

    interface FetchErrorAction {
        type: "FETCH_ERROR";
        payload: { error: string };
    }

    type UserAction = FetchStartAction | FetchSuccessAction | FetchErrorAction;

    interface UserState {
        users: User[];
        loading: boolean;
        error: string | null;
    }

    const initialState: UserState = {
        users: [],
        loading: false,
        error: null,
    };

    function userReducer(state: UserState, action: UserAction): UserState {
        switch (action.type) {
            case "FETCH_START":
                return { ...state, loading: true, error: null };
            case "FETCH_SUCCESS":
                return { ...state, loading: false, users: action.payload.users };
            case "FETCH_ERROR":
                return { ...state, loading: false, error: action.payload.error };
            default:
                // Ensures all action types are handled
                const _exhaustiveCheck: never = action;
                return state;
        }
    }
    ```

3.  **Configuration Objects:**
    *   Define configurations using `interfaces` or `type` aliases with `optional` properties.

    ```typescript
    interface AppConfig {
        apiUrl: string;
        timeout?: number;
        featureFlags: {
            darkMode: boolean;
            analytics: boolean;
        };
    }

    const defaultConfig: AppConfig = {
        apiUrl: "https://api.example.com",
        featureFlags: {
            darkMode: false,
            analytics: true,
        },
    };
    ```

---

## Common Pitfalls & Best Practices

### Pitfalls:

1.  **Over-reliance on `any`**: It negates TypeScript's benefits. If you don't know the type, use `unknown` instead.
2.  **Ignoring strict mode**: Running TypeScript without `strict` mode (e.g., `strictNullChecks` off) can hide potential `null` or `undefined` errors. Always enable `strict` in your `tsconfig.json`.
3.  **Confusing `null` and `undefined`**: While often used interchangeably in JavaScript, TypeScript distinguishes them. Be explicit in your types (e.g., `string | null` instead of just `string` if `null` is a possibility).
4.  **Misusing `enum`**: Don't use `enum` if a simple union of string literals would suffice and you don't need the runtime object. This can lead to larger bundle sizes and less flexibility.

### Best Practices:

1.  **Embrace Type Inference**: Let TypeScript infer types where possible. Don't explicitly annotate types that are easily inferred, as it can add noise without value.
    ```typescript
    // Good: Type inferred as 'string'
    const name = "Alice";
    // Bad: Redundant annotation
    const name: string = "Alice";
    ```
2.  **Prefer `unknown` over `any`**: When dealing with uncertain or external data, always start with `unknown` and then narrow the type through checks.
3.  **Use `interface` for object shapes**: It's generally the idiomatic choice for defining object contracts, especially if inheritance or declaration merging might be useful.
4.  **Use `type` aliases for complex unions, intersections, and primitives**: For types that aren't strictly object shapes or when you need the flexibility of combining types in complex ways, `type` aliases are powerful.
5.  **Leverage Type Narrowing**: Always use type guards (`typeof`, `instanceof`, `in`, discriminated unions) to safely work with union types.
6.  **Exhaustive Checking with `never`**: When working with discriminated unions or `switch` statements, use `never` in the `default` case to ensure all possibilities are handled.

```typescript
// Good example of type narrowing with 'in' operator
interface Car {
    brand: string;
    drive(): void;
}

interface Boat {
    brand: string;
    sail(): void;
}

type Vehicle = Car | Boat;

function operateVehicle(vehicle: Vehicle) {
    if ("drive" in vehicle) { // Narrowing using 'in' operator
        vehicle.drive();
    } else if ("sail" in vehicle) {
        vehicle.sail();
    }
}
```

---

## Summary

Today, we've deepened our understanding of TypeScript's fundamental types and structures, moving beyond the absolute basics to tackle more practical and nuanced scenarios.

Here are the key takeaways:

*   **Special Types:** `unknown` is a safer alternative to `any` for handling unknown data, requiring type narrowing before use. `void` signifies no return value, while `never` indicates a function that never returns (e.g., throws an error or infinite loop), useful for exhaustive checks.
*   **Object Types:** `Interfaces` and `type` aliases are used to define object shapes. `Interfaces` are better for declaring object contracts and support declaration merging/inheritance. `Type` aliases are more flexible for complex type combinations like unions and intersections.
*   **Combining Types:** `Union` types (`|`) allow a variable to hold one of several types, while `Intersection` types (`&`) combine all properties from multiple types. Type narrowing is essential for safely working with union types.
*   **Structured Data:** `Tuples` provide fixed-size, ordered arrays with known types at each position. `Enums` create named constants, with string enums often preferred for readability and explicit values.
*   **Function Types:** TypeScript allows robust typing of function signatures, including parameters (optional, default, rest) and return values.

By mastering these fundamental concepts, you're building a strong foundation for writing more reliable, maintainable, and scalable applications with TypeScript. In our next session, we'll explore even more powerful features like Generics and Type Assertions. Keep practicing!

---
Tags: `typescript tutorial` `typescript fundamentals` `typescript types` `interfaces` `type aliases` `union types` `intersection types` `unknown type` `never type` `enums` `tuples` `type narrowing` `software development`

---

> **Auto-generated by GitHub Growth Engine** | Topic: typescript tutorial | Day 2 | Phase: Introduction & Fundamentals | Difficulty: intermediate
