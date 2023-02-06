/**
 * file: typeAnnotation.ts
 * description: Resposable for teaching the basic concepts about 'Type Annotations'
 * File Transpilation: <Windows> CTRL + SHIFT + B -> tsc: build/watch 
 */

// => Variables [Type Annotations]
let nome: string = 'Enzo Moraes';
console.log(nome);

// => Arrays [Type Annotations]
let animals: string[] = ['Elephant', 'Dog', 'Cat', 'Panda', 'Giraffe'];
console.log(animals);

// => Objects [Type Annotations]
let car: {
    name: string;
    year: number;
    price: number;
};

car = {name: 'Terzo Millennio', year: 2017, price: 100.000}