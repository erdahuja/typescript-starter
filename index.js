"use strict";
exports.__esModule = true;
var isOpen = false;
var myName = 'Scott';
var myAge = 32.04;
var list = [0, 1, 2];
var me = ['Scott', 32, false];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.WebDev;
var phone = 'Pixel';
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
var sayHello = function (word) {
    if (word === void 0) { word = "Deepak"; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(word, otherStuff);
    return word;
};
sayHello("123");
var newName = "Deepak";
newName = 10; // <- not possible
console.log(newName);
var newNameTwo = newName;
newNameTwo = 10;
console.log(newNameTwo);
var newNameThree = "Deepak";
newNameThree = 10; // now possible
newNameThree = "seep";
// newNameThree = true; error
newNameThree = 20;
console.log(newNameThree);
var temp = newNameThree;
temp = "Deepak";
console.log(temp);
// null types
var dog;
dog = "Deepak";
dog = 10;
dog = false;
dog = null;
dog = undefined;
console.log(dog);
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    console.log(age);
};
sayName({ age: 20, name: "Deepak" }); // works!
// Enums
var interfaces_1 = require("./interfaces");
console.log(interfaces_1.Type);
console.log(interfaces_1.Type.Video);
var createContent = function (contentType) {
    console.log(contentType);
};
var Type2;
(function (Type2) {
    Type2[Type2["Quiz"] = "quiz"] = "Quiz";
    Type2[Type2["Video"] = "video"] = "Video";
    Type2[Type2["Blog"] = "blog"] = "Blog";
})(Type2 || (Type2 = {}));
console.log(Type2);
console.log(Type2.Video);
var createContent2 = function (contentType) {
    console.log(contentType);
};
createContent2(Type2.Video); // => "video"
var Team = (function () {
    // private teamName: string;// not accessible outside class
    // readonly teamName: string;// Readonly properties must be initialized at their declaration or in the constructor
    function Team(name) {
        this.teamName = name;
    }
    Team.prototype.score = function () {
        console.log("Goaaaaaal");
        return 1;
    };
    return Team;
}());
var team1 = new Team("Deepak's team");
console.log(team1.teamName, team1.score());
