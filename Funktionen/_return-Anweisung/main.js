"use strict";

const multiplizieren = function (a,b) {
    return a * b;
};
let z1 = 13;
let z2 = 111;

let ergebnis = multiplizieren(z1,z2);
console.log(ergebnis);

let ergebnis2 = multiplizieren(ergebnis, ergebnis);
console.log(ergebnis2);