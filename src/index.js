"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (observer) {
    observer.next("Hello Rxjs");
    observer.next(1);
});
observable.subscribe(function (x) { return console.log(x); });
