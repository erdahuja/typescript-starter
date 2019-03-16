const isOpen: boolean = false;

const myName: string = 'Scott';

const myAge: number = 32.04;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean] = ['Scott', 32, false];

enum Job {
  WebDev,
  WebDesigner,
  PM
}
const job: Job = Job.WebDev;

let phone: any = 'Pixel';
// const tablet: never = 3;
phone = 123;

// parameter type
// const sayHello = (word: string) => {
//   console.log(word)
// }

// return type
// const sayHello = (word: string): string => {
//   console.log(word);
//   return word;
// }

// optional type
// const sayHello = (word?: string): string => {
//   console.log(word);
//   return word;
// }

// default type
// const sayHello = (word = "Default"): string => {
//   console.log(word);
//   return word;
// }

// rest parameters type
const sayHello = (word = "Deepak", ...otherStuff: string[]): string => {
  console.log(word, otherStuff);
  return word;
}

sayHello("123");

let newName = "Deepak";
newName = 10; // <- not possible

console.log(newName);

let newNameTwo = newName;
newNameTwo = 10;

console.log(newNameTwo);

let newNameThree : string | number = "Deepak";
newNameThree = 10; // now possible
newNameThree = "seep";
// newNameThree = true; error
newNameThree = 20;
console.log(newNameThree);

let temp = newNameThree;
temp = "Deepak";
console.log(temp)


// null types
let dog: string|number|boolean|undefined;
dog = "Deepak";
dog = 10;
dog = false;
dog = null;
dog = undefined;
console.log(dog);

