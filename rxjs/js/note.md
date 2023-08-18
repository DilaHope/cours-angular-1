RxJS
RxJS, abréviation de " Reactive eXtension for JavaScript", est une bibliothèque JavaScript qui met en oeuvre le paradigme de programmation réactive.Elle est principalement utilisée pour gérer les flux de données asynchrones et les évènements dans les applications web.

RxJS est basé sur le concept d'**observables**, qui permet de  représenter un flux de donné"s pouvant être émis à partir de différentes sources , telles que des évènements de l'interface utilisateur, des requétes HTTP, des timers , etc.
Ces observables peuvent essuite être manipulés,filtres, combinés, transformés, ou souscrits pour réagir aux données émises.

NB: synchrone :
   asynchrone : ça ne vient pas l un apres lautre


   les principaux

   Observable :représente un flux de données asynchrone et continu  d'emettre des données au fil du temps

   Observer(en anglais): un objet qui écoute les valeurs émises par un Observable, en réagissant aux événements tels que la réception  d une nouvelle valeur, la completion
   Opérateurs: des fonction qui permettent de traiter les lflux de données, tels que la transformation le filtrage  la combinaison etc

   Subscription: un mécanisme permettant de lier un Observable à un Observer pour commencer à recevoir des valeurs émises par i'observable


   Sujet (subject): un type spécial d'Observable qui permet d'émettre manuellement des valeurs et d'agir à la fois comme Observable en comme Observer

   Pipe: un moyen de chaîne  des Opérateurs sur les 


   Un Subject : encore appelé sujet  ,il peut jouer le role d'Observable et de Observer(a lire en anglais) 



