"use strict";

// const multiplizieren = function(a,b) {
//     console.log(a);
//     console.log(b);
//     console.log(a*b);
// };

// let z1 = 42;
// let z2 = 20;

// // ergibt Ergebniss: 756
// multiplizieren(z1,z2);

console.log('---------------');

// ergibt Fehlermeldung NaN (not a Number)
//multiplizieren(z1);

console.log('#################');

// // default-Parameter = (b=10)
// const multiplizieren = function(a,b = 10) {
//     console.log(a);
//     console.log(b);
//     console.log(a*b);
// };

// let z1 = 42;
// let z2 = 20;

// // durch let z2 wird der Default-Parameter überschrieben! 
// multiplizieren(z1, z2);


const begruessung = function(name = "Max",nachname = "Mustermann",alter = 12) {
    console.log(`Hallo ${name} ${nachname}. Du bist ${alter} Jahre alt!`)
};

let name = 'Hannes';
let nachname = 'B';
let alter = 32;

begruessung(name, nachname, alter);
begruessung();
begruessung(undefined, nachname, alter);
begruessung(name, undefined, alter);
begruessung(name, nachname, undefined);