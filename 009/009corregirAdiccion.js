"use strict";

let a = + prompt("¿Primer número?", 1);
let b = + prompt("¿Segundo número?", 2);
alert(a + b); 

/*Prompt devuelve por defecto un String. 
Devuelve 12 porque interpreta que el alert es una concatenacion
La solución es utilizar el '+' antes de la función para indicar que debe devolver un número*/