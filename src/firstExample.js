"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function abc(callback, arg) {
    callback(arg);
}
function callback(value) {
    console.log("Iman", value);
}
abc(callback, 'Kaur');
var inputNode = document.createElement('input');
inputNode.id = 'yourname';
document.body.appendChild(inputNode);
function def() {
    var ESC_KEY = 27;
    var nameInput = document.getElementById('yourname');
    //  nameInput.addEventListener('keydown',()=>console.log('event attached'));
    this.fromEvents(nameInput, 'keydown')
        .subscribe(function (e) {
        if (e.keyCode === ESC_KEY) {
            nameInput.value = '';
        }
    });
}
function fromEvents(target, eventName) {
    return new rxjs_1.Observable(function (observer) {
        var handler = function (e) { return observer.next(e); };
        target.addEventListener(eventName, handler);
        return function () {
            target.removeEventListener(eventName, handler);
        };
    });
}
def();
