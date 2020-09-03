"use strict";
exports.__esModule = true;
// // function cannot return multiple values
// function foo1() {
//   console.log("called foo1");
//   return 3;
//   return 4;
// }
// console.log(foo1());
// //function acting like observable 
// function foo() {
//   console.log("called foo");
//   returnMultiple(3);
//   returnMultiple(4);
// }
// //like multiple execution of next function of Subscriber class from the registered callback
// function returnMultiple(x:any) {
//   console.log(x);
// }
// foo();
// //simple observable example
// const abc = new Observable((x:Subscriber<unknown>)=> {
//     x.next(1);
//     x.next(2);
// })
// abc.subscribe(x => console.log("mapped with next function of subsriber", x))
//mapping of parameter passed to subscriber with registered callback in observable
function def(a) {
    debugger;
    a.next(1);
    a.error();
}
var t = {
    next: function (y) { return console.log(y); },
    error: function () { return console.log("error"); }
};
def(t);
