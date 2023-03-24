// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// type alias
type Person = {
  name: string;
  age: number;
};

// Primitives
let age: number = 27;
let userName: string = 'cozups';
let isInstructor: boolean = false;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};
person = {
  name: 'cozups',
  age: 27,
};

// union
let course: number | string;
course = 'React';
course = 12;

let people: Person[];

// functions & types
function add(a: number, b: number) {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
