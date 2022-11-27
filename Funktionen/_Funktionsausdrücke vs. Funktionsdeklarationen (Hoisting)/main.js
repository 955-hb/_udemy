"use strict";


// Funktionsausdrücke
const funktion_1 = function(){
    console.log('funktion_1')
};
funktion_1();

let funktion_2 = function(){
    console.log('Funktion_2');
};
funktion_2();

funktion_2 = function(){
    console.log('Funktion 2 (Neu)');
};
funktion_2();

// Funktionsdeklarationen (werden gehoistet!)
function funktion_3() {
    console.log('Funktion_3');
};
funktion_3();