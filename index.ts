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
console.log(typeof phone);
phone = 123;
console.log(typeof phone);