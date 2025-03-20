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

class Student {
  constructor(
    private _firstName: string | null = 'Duc',
    private _lastName: string,
    private _email: string,
    private _age: number,
    private _courses: string[],
  ) {
  }

  get firstName(): string | null {
    return this._firstName;
  }

  set firstName(value: string | null) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get courses(): string[] {
    return this._courses;
  }

  set courses(value: string[]) {
    this._courses = value;
  }

  enroll(courseName: string) {
    this._courses.push(courseName);
  }
}

const student = new Student('Duc', 'Phan', 'phanquiduc@gmail.com', 25, ['Angular']);
student.enroll('Java');

interface Human {
  firstName: string;
  lastName: string;
  age: number;
  greet: () => void;
}

let duc: Human;
duc = {
  firstName: 'Duc',
  lastName: 'Phan',
  age: 25,
  greet() {
    console.log('Greet');
  },
};

class Instructor implements Human {
  firstName: string;
  lastName: string;
  age: number;

  greet(): void {
  }

}
