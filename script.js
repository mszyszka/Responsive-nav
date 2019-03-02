//Object in JavaScript

//If we're dealing with prymitives, in const/let/var we have actual values.
let a = 'one';
let b =  a;
a = 'two';
console.log('value ' + a);
console.log('value ' + b);

console.log('/////////////////////////////////////');

//If we're dealing with Objects, in const/let/var we only have reference/address to it.
const c = ['a', 'b', 'c'];
const d = c;
//We can do it, becouse we're modifing an array, not a reference(that is actual a value of const in case of Object) to it
d[3] = 'd';
console.log(c);
console.log(d);

//Typy refeferencyjne to Obiekty.
//Obiekt ogólny
//Funkcja
//Tablica
//Wszysztkie trzy są obiektami. Przy czym funkcja i tablica może być traktowana 
//jako pod typ obiektu ogólnego - dziedziczą po nim

//KAŻDY STWORZONY PRZEZ NAS OBIEKT JEST INSTANCJĄ OBIEKTU REFERENCJNEGO
//stworzona przez nas funkcja jest instacją wbudowanego obiektu referencyjnego Function,
//który posiada właściwości i metody, które nowa instancja dzieziczy.

const car = {
    color: 'red',
    acceleration: function() {
        console.log('100km/h in 10 sec')
    },
};

console.log(car);
console.log(car.acceleration);

car.color = 'white';
car.acceleration = function() {
    console.log('120km/h in 10 sec');
}

console.log(car);
console.log(car.acceleration);

console.log('//////////////// closures/domknięcia /////////////////');

//closures - umożliwia dostęp do zmiennej spoza aktualnego zasięgu

function example() {
    const insideVar = 'zmienna stworzona w funkcji';

    return insideVar;

}

let outsideVar = example();

console.log(outsideVar);
