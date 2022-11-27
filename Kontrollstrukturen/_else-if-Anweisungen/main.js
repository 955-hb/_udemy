"use strict";

/* Grundgerüst if-Bedingungen!

if (Bedinung) {
    code der ausgeführt wird wenn die Bedinung erfüllt ist!
    erfüllt = true!
}
-----------------------------------------------------------------
Grundgerüst if-else-Bedingungen!

if (Bedingung) {
    code der ausgeführt wird wenn die Bedinung erfüllt ist!
} else {
    code der ausgeführt wird wenn die Bedinung NICHT erfüllt ist!
}
*/
// -----------------------------------------------------------------
// Grundgerüst else-if-Bedingungen!

// if (Bedingung1) {
//     Code der ausgeführt wird, wenn die Bedingung1 erfüllt(true) ist.
// } else if (Bedingung_2) {
//     Code der ausgeführt wird, wenn die Bedingung2 erfüllt(true) ist.
// } else if (Bedingung3) {
//     Code der ausgeführt wird, wenn die Bedingung3 erfüllt(true) ist.
// } else {
//     Code der ausgeführt wird, wenn die Bedingung nicht erfüllt(true) ist.
// }


const min_age = 18;
let age = 32;
age = 17;

// if (age >= min_age) {
//     if (age == min_age) {
//         console.log('Du bist gerade alt genug!');
//     } else {
//         console.log('Du bist alt genug!');
//     }
// } else {
//     console.log('Du bist noch nicht alt genug!');
// }



if (age == min_age) {
    console.log('du bist gerade alt genug!');
} else if (age > min_age) {;
    console.log('Du bist alt genug!');
} else {
    console.log('Du bist noch nicht alt genug!');
}