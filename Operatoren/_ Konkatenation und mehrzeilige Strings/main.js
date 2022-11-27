"use strict";

let vorname = 'Hannes';
let nachname = 'Bröhl';
let alter = 24;

let name = vorname + ' ' + nachname;
console.log(name);

let begruessung = 'Hallo ' + name + '!';

console.log(begruessung);

let zusammenfassung = name + ' (' + alter + 'Jahre) ';
console.log(zusammenfassung);



let einzeiliger_string = 'Das ist ein einzeiliger String!';
let mehrzeiliger_String = 'Ich will diesen String ' +
    ' in der nächsten Zeile' +
    'fortsetzen!';


console.log(mehrzeiliger_String);