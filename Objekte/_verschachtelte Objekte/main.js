"use strict";

/*
let iban = 'DE2650075697000523';
let bic = 'WEDHAN45CH';
let kontostand = 3500;
let aktiv = true; 


let inhaber_1 = {
    vorname: 'max',
    nachname: 'br',
    geschlecht: 'männlich',
    alter: 32,
};

console.log(inhaber_1);

let inhaber_2 = {
    vorname: 'hannah',
    nachname: 'mr',
    geschlecht: 'weiblich',
    alter: 29,
};

console.log(inhaber_2);

let konto_1 = {
    iban: 'DE2650075697000523',
    bic: 'WEDHAN45CH',
    inhaber: inhaber_1,
    kontostand: 3500,
    aktiv: true
};

console.log(konto_1);

let konto_2 = {
    iban: 'DE2650075697000523',
    bic: 'WEDHAN45CH',
    kontostand: 5500,
    aktiv: true,
};

console.log(konto_2);
*/

let konto_3 = {
    iban: 'DE2650075697000523',
    bic: 'WEDHAN45CH',
    inhaber: {
        vorname: 'max',
        nachname: 'mustermann',
        alter: 55,
    },
    kontostand: 5500,
    aktiv: true,
};

//console.log(konto_3);


let konto_4 = {
    iban: 'DE2650075697000523',
    bic: 'WEDHAN45CH',
    inhaber: {
        vorname: 'paul',
        nachname: 'straßmann',
        geschlecht: 'männlich',
        alter: 34,
    },
    kontostand: 5500,
    aktiv: true
};

//console.log(konto_4);


/* Aufgabe:
Objekt für ein Auto anlegen:

- Marke
- Modell
- Kraftstoffart
- Kilometerstand
- Ausstattung
    - Navigationsgerät
    - Klimaanlage
    - Sitzheizung
    - Tempomat
    - Panoramadach
- Zustand
- Preis
*/

let Auto = {
    Marke: 'Mercedes',
    Modell: 'G',
    Kraftstoffart: 'Diesel',
    Kilometerstand: 12000,
    Ausstattung: {
        Navigationssystem: true,
        Klimaanlage: true,
        Sitzheizung: true,
        Tempomat: true,
        Panoramadach: false,
        }, 
    Zustand: 'gebraucht',
    Preis: 45599
};
console.log(Auto);
