'use strict'
//import {observation} from "rxjs"
//node rxjs\js\freshy.js
const { Observable, map } = require("rxjs");
const products = {
    data: [
        { nom: "spaghetti", prix: 25000, qualité: "supérieure" },
        { nom: "tomate", prix: 1500, qualité: "supérieure" },
        { nom: "oeuf", prix: 40000, qualité: "supérieure" },
        { nom: "mayo", prix: 9500, qualité: "inférieure" },
        { nom: "viande", prix: 60000, qualité: "inférieure" },
        { nom: "pain", prix: 3200, qualité: "inférieure" },
    ]
}

const observable = new Observable((subscriber) => {
    subscriber.next(products);


}).pipe(

    map((value) => {

        console.log("Dans le 1er opérateur, valeur=:", value);
        return value.data;

    }),


    map((value) => {

        console.log("Dans le 2ème opérateur, valeur=:", value);
        return value.filter((prod => prod.qualité === "supérieure"));

    }),

    map((value) => {

        console.log("Verification de la presence du spaghetti  en stock");

        value.forEach(obj => {
            if (obj.nom === "spaghetti") { console.log("spaghetti prêt"); }
        })
        return value;
         }),

    );

//  const obsersvable = new Observable((subscriber) => { subscriber.next(products); });

  observable.subscribe((value) => { console.log("reception de: ", value); })
// const observer = {next: (valeur) => console.log("...")}
//