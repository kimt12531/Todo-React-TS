// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
// let age: number = 12;

age = 12;
age = 12.1;
// age = '12'; //error

let userName: string;

userName = "Kim";

let bool: boolean;

bool = true;
bool = false;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];
// hobbies = ['Sports', 'Cooking', 21]; // error

// let person: {
//   name: string;
//   age: number;
// };

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Kim",
  age: 20,
};

// let person2 = {
//   name: true,
// };               //error

// let people: {
//   name: string;
//   age: number;
// }[];

let people: Person[];

people = [person];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 1234;

let userName2: string | string[];

// Functions & Types

function add(a: number, b: number) {
  return a + b;
}

// // Explicitly setting type
// function add(a: number, b: number): number {
//   return a + b;
// }

// returns void
function printValue(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = { value, ...array };
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["1", "2", "3"], "-1");
