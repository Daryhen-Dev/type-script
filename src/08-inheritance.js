"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    /**
     *
     */
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log('Moving along!');
    };
    Animal.prototype.greeting = function () {
        return "Hello, I'm ".concat(this.name);
    };
    return Animal;
}());
exports.Animal = Animal;
var fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());
