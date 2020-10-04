"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subj = new rxjs_1.Subject();
subj.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
subj.subscribe({
    next: function (v) { return console.log("observerB: " + v); }
});
subj.next(1);
subj.next(2);
var obser = new rxjs_1.Observable(function (x) {
    x.next(1);
    x.next(2);
});
obser.subscribe(function (x) { return console.log('Observable', x); });
obser.subscribe(function (y) { return console.log('observable', y); });
