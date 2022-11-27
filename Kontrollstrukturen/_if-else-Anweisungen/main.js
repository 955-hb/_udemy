"use strict";

/* Grundgerüst if-Bedingungen!


if (Bedinung) {
    code der ausgeführt wird wenn die Bedinung erfüllt ist!
    erfüllt = true!
}

if (10 > 20) {
    console.log('Ìf wurde ausgeführt!');
}

if (10 < 20 && 10 < 30) {
    console.log('If wurde ausgeführt!');
}

Grundgerüst if-else-Bedingungen!

if (Bedingung) {
    code der ausgeführt wird wenn die Bedinung erfüllt ist!
} else {
    code der ausgeführt wird wenn die Bedinung NICHT erfüllt ist!
}


if (false) {
    console.log('if wird ausgeführt!');
} else {
    console.log('else wird ausgeführt!');
}
*/


// const min_age = 18;
// let age = 32;
// age = 17;

// if (age >= min_age) {
//     console.log('du bist alt genug!');
// } else {
//     console.log('du bist NICHT alt genug!');
// }


const min_age = 18;
let age = 32;
age = 19;

if (age >= min_age) {
    if (age == min_age) {
        console.log('Du bist gerade alt genug!');
    } else {
        console.log('Du bist alt genug!');
    }
} else {
    console.log('Du bist noch nicht alt genug!');
}