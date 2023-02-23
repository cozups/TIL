// built-in types
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

// any type
let level;
level = 1;
level = 'a';

function render(document: any) {
  console.log(document);
}

// array
let numbers = [1, 2, 3];

// tuple
let user: [number, string] = [1, 'Miso'];

// enum
// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}
calculateTax(10_000);

// Object
// type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Miso',
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// Intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// Nullable
function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Hola!');
  }
}

greet(null);

// Optional Chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
