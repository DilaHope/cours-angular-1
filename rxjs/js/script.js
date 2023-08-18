'use strict';
// const btn = document.querySelector('button');

               /** METHODE UNE */
// au clique du button  console loguer 'bouton cliqué'
// btn.addEventListener('click',() => console.log('bouton cliqué'));

               /** METHODE 2 avec RxJS*/
// import { fromEvent } from "rxjs";
//  import { Observable } from "rxjs/internal/Observable";
// fromEvent(btn,'click').subscribe(() => console.log('boutton cliqué 😎'));
// const {Observable,of , from}= require('rxjs')


// // voici un un observeur 

// let monObserver = {
//     next: (x) => console.log("Une valeur reçu: " + x), // methode qui s'execute à chaque fois que le serveur retourne une valeur
//     error: (err) => console.log("Une erreur s'est produite: " + err),//methode qui s'execute si une erreur advient
//     complete: () => console.log("L'Observer a reçu une notification de complétion"), // methode qui s'execute quand on a recuperé toutes les valeurs
// }


// // L'obsersvable prend une fonction et la fonction prend un paramétre qui est l'observer

// let monObservervable = new Observable ((Observer) => {

//     Observer.next(1); // envoie d'une notification
//     Observer.next(2); // envoie d'une notification
//     Observer.next(3); // envoie d'une notification

//     setTimeout(() =>{
//         Observer.next(4); // envoie d'une notification
//         Observer.complete(); // envoie d'une notification
//     }, 4000);
     
// })


// //let obs = of(1,2,3);
// let obs = from ([1,2,3]);
// //monObservervable.subscribe(monObserver); // l' observer est pret a recevoir la valeur de l'observable
// monObservervable.subscribe((x) => {
//     console.log('Une valeur reçue !' + x);
// })


const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// mapping data  TODO filtre
const maxPoint = source.pipe(
    max((pA, pB) => Math.sqrt(pA.x ** 2 + pAy ** 2) < Math.sqrt(pB.x ** 2 + pB.y ** 2)? -1 : 1)
    );
// s'inscrire TODO et afficher les données
maxPoint.subscribe(v => console.log(`Le point le plus éloigné est x: ${v.x}, y: ${v.y}`));