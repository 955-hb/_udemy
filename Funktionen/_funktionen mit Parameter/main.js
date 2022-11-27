"use strict";

/*
const meine_funktion = function (parameter_1, parameter_2) {
    auszuführender Code
};

meine_funktion(p_1, p_2);
*/

const log_die_zahl = function(a) {
    console.log(a);
};

//log_die_zahl(42);


// // benennung der Parameter egal. (gerne auch x & y)
// const begruessung = function(vorname, nachname) {
//     console.log(`Hallo ${vorname} ${nachname}!`);
// };

// let vor = "Max";
// let nach = "Mustermann";

// begruessung(vor, nach);

// Parameter mit x&y
// const begruessung = function(x, y) {
//     console.log(x, y);
// };
// let vor = "Max";
// let nach = "Mustermann";

// begruessung(vor, nach);

console.log('--------------------------------');


const mathe_magie = function(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
};

let z1 = 23;
let z2 = 54;
let z3 = 99;
let z4 = 77;
let z5 = 5;

mathe_magie(z1,z5);
mathe_magie(z4,z2);
mathe_magie(z3,z2);
mathe_magie(z5,z2);
mathe_magie(z5,z5);

//funktions-ausgabe 1: z1+z5 / z1-z5 / z1*z5 / z1/z5 / z1%z5
//funktions-ausgabe 2: z4+z2 / z4-z2 / z4*z2 / z4/z2 / z4%z2
// usw bis          5: z5+z5 / z5-z5 / z5*z5 / z5/z5 / z5%z5 