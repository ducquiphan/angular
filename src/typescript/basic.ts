// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;
let userName: string;
userName = 'James';

function add(a: number, b: number) {
  return a + b;
}

let result = add(3, 5);

let isInstructor: boolean = false;


// More complex types
let hobbies: string[];
hobbies = ['Sport', 'Cooking'];
hobbies.push('Singing');

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: 'James',
  age: 25,
};

let people: Person[];

// Type inference
let course: string | string [] | number = 'Angular - The Complete Guide';

course = 12345;

// Functions & Type
function subtract(a: number, b: number): number {
  return a - b;
}

function print(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3, 4];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split(''); // this can be done due to using any but cannot be done using Generics
