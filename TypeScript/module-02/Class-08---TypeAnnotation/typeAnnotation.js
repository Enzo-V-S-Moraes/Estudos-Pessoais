"use strict";
/**
 * file: typeAnnotation.ts
 * description: Responsable for teaching the basic concepts about 'Type Annotations'
 * file Transpilation: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// => Variables [Type Annotations]
let nome = 'Enzo Moraes';
console.log(nome);
// => Arrays [Type Annotations]
let animals = ['Elephant', 'Dog', 'Cat', 'Panda', 'Giraffe'];
console.log(animals);
// => Objects [Type Annotations]
let car;
car = { name: 'Terzo Millennio', year: 2017, price: 100000 };
console.log(car);
// => Functions [Type Annotation]
function multiplyNumber(num1, num2) {
    return num1 * num2;
}
console.log(multiplyNumber(2, 5));
