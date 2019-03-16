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
// newName = 10; // <- not possible

console.log(newName);

let newNameTwo = newName;
// newNameTwo = 10;

console.log(newNameTwo);

let newNameThree: string | number = "Deepak";
newNameThree = 10; // now possible
newNameThree = "seep";
// newNameThree = true; error
newNameThree = 20;
console.log(newNameThree);

let temp = newNameThree;
// temp = "Deepak";// error implicit type number
console.log(temp)


// null types
let dog: string | number | boolean | undefined;
dog = "Deepak";
dog = 10;
dog = false;
dog = null;
dog = undefined;
console.log(dog);

// interface

// const sayName = (name: string, age: number) => {
//   console.log(name);
//   console.log(age);
// }

// sayName(20, "Deepak");// error

import { Person } from './interfaces';
const sayName = ({ name, age }: Person) => {
  console.log(name);
  console.log(age);
}

sayName({ age: 20, name: "Deepak" });// works!

// Enums


import { Type } from './interfaces';
console.log(Type);
console.log(Type.Video);

const createContent = (contentType: Type) => {
  console.log(contentType);
}

enum Type2 {
  Quiz = "quiz",
  Video = "video",
  Blog = "blog"
}

console.log(Type2);
console.log(Type2.Video);

const createContent2 = (contentType: Type2) => {
  console.log(contentType);
}

createContent2(Type2.Video);// => "video"

class Team {
  teamName: string;// public
  // private teamName: string;// not accessible outside class
  // readonly teamName: string;// Readonly properties must be initialized at their declaration or in the constructor
  constructor(name) {
    this.teamName = name;
  }
  score(): number {
    console.log("Goaaaaaal");
    return 1;
  }
}
const team1 = new Team("Deepak's team");
console.log(team1.teamName, team1.score());

// Duck type
class Dancer implements Person {
  name: string;  age: number;


}
const fake = {
  name: "Deepak",
  age: 20,
  expereicne: 2
}
let dancer: Person;
dancer = fake;
