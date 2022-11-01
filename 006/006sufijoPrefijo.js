"use strict"; 

let a = 1, b = 1;
let c = ++a; 
let d = b++; 

console.log(c); //Retorna 2 porque el valor se incrementa antes de asignarse
console.log(d); //Retorna 1 porque b++ hace incrementar b, pero el valor que retorna es el que tenía

