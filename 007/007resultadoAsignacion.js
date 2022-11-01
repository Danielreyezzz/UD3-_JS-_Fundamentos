"use strict";

let a = 2;
let x = 1 + (a *= 2);

console.log(a); 
console.log(x);

// 'a' es 4 porque en el parentesis a la variable se le reasigna su propia cantidad multiplicada por 2
// 'x' es 5 porque 'a' ya vale 4



