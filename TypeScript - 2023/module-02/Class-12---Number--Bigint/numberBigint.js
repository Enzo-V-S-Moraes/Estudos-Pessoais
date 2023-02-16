"use strict";
/**
 * file: numberBigint.ts
 * description: responsable file for teaching about type number and type bigint
 * file Transpilation: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// => Examples: nunber
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log('Number - Floating Point ... :', num1);
console.log(typeof (num1));
console.log('Number - Hexadecimal ... :', num2);
console.log(typeof (num2));
console.log('Number - Octal ... :', num3);
console.log(typeof (num3));
console.log('Number - Binary ... :', num4);
console.log(typeof (num4));
// => Examples: bigint
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
let big3 = 0x20000000000003n;
let big4 = 0x20000000000003n;
console.log('Bigint ... :', big1);
console.log(typeof (big1));
console.log('Bigint - Binary ... :', big2);
console.log(typeof (big2));
console.log('Bigint - Hexadecimal ... :', big3);
console.log(typeof (big3));
console.log('Bigint - Octal ... :', big4);
console.log(typeof (big4));
