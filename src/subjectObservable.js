"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subj = new rxjs_1.Subject();
subj.subscribe({
    next: function (a) { return console.log("observer 1: " + a); }
});
subj.subscribe({
    next: function (b) { return console.log("observer 2: " + b); }
});
var obser = new rxjs_1.Observable(function (x) {
    x.next(1);
    x.next(2);
});
obser.subscribe(subj);
