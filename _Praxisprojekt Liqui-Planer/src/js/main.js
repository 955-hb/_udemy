'use strict';

//Gesamtbilanz anlegen
let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel, 
    typ, 
    betrag, 
    datum;

const eintrag_erfassen = function(){
    titel = prompt('Titel:');
    typ = prompt('Typ (Einnahmen oder Ausgaben):');
    betrag = parseInt(prompt('Betrag (in Cent):'));
    datum = prompt('Datum (JJJJ-MM-DD):');
};

const eintrag_ausgeben = function(titel, typ, betrag, datum){
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`);
};

// verrechnen des ersten Eintrags mit der Gesamtbilanz
const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag){
    if (typ === 'Einnahmen') {
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if (typ === 'Ausgaben') {
        ausgaben = ausgaben + betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log(`Der Typ "${typ}" ist nicht bekannt.`);
    }
};

// Gesamtbilanz ausgeben
const gesamtbilanz_ausgeben = function (einnahmen, ausgaben, bilanz){
    console.log(`Einnahmen: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`
    );
};

const eintrag_hinzufuegen = function(){
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
};

eintrag_hinzufuegen();
eintrag_hinzufuegen();
//eintrag_hinzufuegen();