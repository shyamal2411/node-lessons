// console.log("Hey this should be running!");
// const sg = require("./second");
// console.log("Hey", sg);

// console.log(__dirname);
// console.log(__filename);

// function callFunction(fun){
//     fun();
// }

// function Hi(){
//     console.log("Hi"); 
// }

// Hi();

// var sayBye = function(){
//     console.log("Bye");
// };

// callFunction(sayBye);

var stuff = require('./count');

console.log(stuff.counter(['hello', 'world', '!','first', 'second', 'third']));

console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));