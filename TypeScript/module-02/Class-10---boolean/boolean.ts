/**
 * file: boolean.ts
 * descrption: responsable arquive for teaching basics concepts about 'Type boolean'
 * file Transpilation: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// => Example 01

let taskCompleted: boolean = true;
let pendingTask: boolean = false;

console.log(taskCompleted);
console.log(pendingTask);

// => Example 02

let completed: boolean = false;

if(!completed){
    console.log('Task completed successfully')
}else{
    console.log('Pending Task!');
}