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
