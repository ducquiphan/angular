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

let person: {
  name: string;
  age: number;
};
person = {
  name: 'James',
  age: 25,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = 'Angular - The Complete Guide';

// course = 12345;
