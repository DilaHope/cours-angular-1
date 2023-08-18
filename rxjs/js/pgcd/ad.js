import {fromEvent} from 'rxjs';
import { map,mergeMap } from 'rxjs/operators';

const num1Input =document.querySelector('#num1')
const num2Input =document.querySelector('#num2')
const resultSpan=document.querySelector('p span')


const ob1 = fromEvent(num1Input, 'input').pipe(
    map ((event) => parseInt(event.target.value))
);

const ob2 = fromEvent(num1Input, 'input').pipe(
    map ((event) => parseInt(event.target.value))
);

const resultObservable = ob1.pipe(
    mergeMap((num1) => ob2.pipe(map(num2 => pgcd(num1,num2))))
);

resultObservable.subscribe(pgcdValue = resultSpan.innerHTML = pgcdValue )

/**FONCTION */
// const pgcd = (a,b) =>{
//     if (b===0){
//         return a ; 
//     }
//     return pgcd(b, a%b);
// }  ici les graang nombre ne pase pas avec cette forme recurssive , on prend donc la methode suivante:

const pgcd = (a,b) => {
    while (b!== 0){
        let temp = b;
        b = a % b;
        a =temp;

        // [a,b] = [b,a % b]
    }
    return a ;
}



