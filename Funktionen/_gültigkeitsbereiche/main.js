"use strict";

//Gültigkeitsbereich: Bereich in dem man zugriff auf eine Variable hat. 

//Globale Variablen: wird außerhalb aller Code-Blöcke definiert und ist von überall zugänglich
//Lokale Variablen: wird innerhalb eines Code-Blocks definiert & ist NUR in diesen & in den  
// codeblöcken die darin enthalten sind verfügbar.

//Globalen-Gültigkeitsbereich: variable_1
    // Lokale-Gültigkeitsbereich 1: variable_2  
        // Lokale-Gültigkeitsbereich 1.1: variable_3
    // Lokale-Gültigkeitsbereich 2: variable_4
let variable_1 = "variable_1";

const meine_funktion = function() {
    let variable_2 = "variable_2";

    if (true) {
        let variable_3 = "variable_3";
        console.log(variable_1);
        console.log(variable_2);
        console.log(variable_3);
    }


    console.log(variable_1);
    console.log(variable_2);
    //console.log(variable_3);
};

meine_funktion();

console.log(variable_1);
//console.log(variable_2);
//console.log(variable_3);

if (true) {
    let variable_4 = "variable_4";
}