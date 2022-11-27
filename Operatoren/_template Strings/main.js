"use strict";

let vorname = 'Hannes';
let nachname = 'Bröhl';
let alter = 32;

let name = vorname + ' ' + '(' + alter + ')';
console.log(name);

let begruessung = `Hallo ${name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);



// mehrzeiliger Absatz template-String
let mehrzeiliger_template_string = `Hallo ${name}!
du bist ${alter} Jahre.
wie geht es dir?`;
console.log(mehrzeiliger_template_string);


// aneinander folgender template-String
let mehrzeiliger_template_string_2 = `Hallo ${name}!` +
    `Du bist ${alter} Jahre alt.` +
    `wie geht es dir?`;
console.log(mehrzeiliger_template_string_2);