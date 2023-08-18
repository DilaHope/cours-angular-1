const { Subject,interval} = require('rxjs');
/**
 * Méthode créant un Observable quiq renvoi périodiquement 
 * et continuellement un flux 
 * d'entier naturels (0,1,2,3);
 * 
 */

const numbers = interval(1000); // Observable
const subject = new Subject(); // la creation du Subject

/**
 * on connecte le sujet à l'Observable "numbers"
 * et donc , chaque  valeur émise par "numbers"
 * sera reçu par "subject" et transmis aux abonnés
 */

numbers.subscribe(subject);

/**
 * suject1,suject2, et suject3 s'abonnent au sujet "subject"
 */


  subject -Observable 
const suject1 = subject.subscribe({
    next: (val) =>console.log('composant #1' , val),
    error: (err) => console.log(),
    complete: () => console.log('composant #1',complete),
});
  subject -Observable
const suject2 = subject.subscribe({
    next: (val) =>console.log('composant #2' , val),
    error: (err) => console.log(),
    complete: () => console.log('composant #1',complete),
});


// vu qu'on s'est abonné à la ligne 18 nous allons cette fois proccede a un desabonnement 
// on va d abord stocké l abonnement dans une variable 
const subsubcibe = numbers.subscribe(subject);


// onprocce au desabonement au bout de 5s
 const TimeId = setTimeout(() => {
    subject.complete();
    suject1.unsubscribe();
    suject2.unsubscribe();


    subsubcibe.unsubscribe(); //sujet se desabonne

    clearTimeout(TimeId);
 },5000)