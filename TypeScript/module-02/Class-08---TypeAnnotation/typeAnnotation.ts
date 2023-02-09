/**
 * file: typeAnnotation.ts
 * description: Responsable for teaching the basic concepts about 'Type Annotations'
 * file Transpilation: <Windows> CTRL + SHIFT + B -> tsc: build/watch 
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

car = {name: 'Terzo Millennio', year: 2017, price: 100000}
console.log(car);

// => Functions [Type Annotation]
function multiplyNumber(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplyNumber(2,5));