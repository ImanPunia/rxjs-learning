"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// function cannot return multiple values
function foo1() {
    console.log("called foo1");
    return 3;
    return 4;
}
console.log(foo1());
//function acting like observable 
function foo() {
    console.log("called foo");
    returnMultiple(3);
    returnMultiple(4);
}
//like multiple execution of next function of Subscriber class from the registered callback
function returnMultiple(x) {
    console.log(x);
}
foo();
//simple observable example
var abc = new rxjs_1.Observable(function (x) {
    x.next(1);
    x.next(2);
});
abc.subscribe(function (x) { return console.log("mapped with next function of subsriber", x); });
// var observable = new Observable(observer => {
//     observer.next("Rxjs");
//     let x =0;
//     setTimeout(() => {
//         x=x+1;
//         observer.next(x);
//       }, 1000);
// })
