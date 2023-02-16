"use strict";
/**
 * file: boolean.ts
 * descrption: responsable arquive for teaching basics concepts about 'Type boolean'
 * file Transpilation: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// => Example 01
let taskCompleted = true;
let pendingTask = false;
console.log(taskCompleted);
console.log(pendingTask);
// => Example 02
let completed = false;
if (!completed) {
    console.log('Task completed successfully');
}
else {
    console.log('Pending Task!');
}
