"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (observer) {
    observer.next("Rxjs");
    var x = 0;
    setTimeout(function () {
        x = x + 1;
        observer.next(x);
    }, 1000);
});
observable.subscribe(function (x) { return console.log("x", x); });
observable.subscribe(function (y) { return console.log("y", y); });
observable.subscribe(function (z) { return console.log("z", z); });
function someFunction(a) {
    a.next(1);
}
;
var boundSomeFunction = new rxjs_1.Observable(someFunction);
boundSomeFunction.subscribe(function (value) {
    console.log("val", value);
});
