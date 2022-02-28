// module.exports.counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array';
// }
// module.exports.adder = function(a,b){
//     return `The sum of the two numbers is ${a+b}`;
// }

// module.exports.pi = 3.14;
 
// console.log(counter(['hello', 'world', '!','first', 'second', 'third']));

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}
var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
}

var pi = 3.14;
 
module.exports = {
    counter: counter,
    adder: adder,
    pi:pi
};