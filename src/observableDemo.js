"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable1 = rxjs_1.of(2, 6, 7, 8);
observable1.subscribe(function (x) { return console.log(x); });
observable1.subscribe(function (x) { return console.log('second', x); });
