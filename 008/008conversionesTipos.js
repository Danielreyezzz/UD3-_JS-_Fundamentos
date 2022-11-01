"use strict";


console.log("" + 1 + 0); 
//El resultado es 10. Un string seguido de un + se considera concatenación.

console.log("" - 1 + 0); 
//El resultado es - 1. El simbolo '-' no sirve para concatenar, por lo que los dígitos operarán como tal.

console.log(true + false); 
//El resultado es 1. Se suman los valores numéricos, es decir, 1 + 0.

console.log(6 / "3");
//El resultado es 2. Las operaciones matemáticas hacen que los string se interpreten como números.

console.log("2" * "3");
//El resultado es 6. Las operaciones matemáticas hacen que los string se interpreten como números.

console.log(4 + 5 + "px");
//El resultado es "9px". Primero se suman los dígitos y luego se concatena con "px".

console.log("$" + 4 + 5);
//El resultado es "$45". Al empezar por un string, se interpretan los '+' como concatenación.

console.log("4" - 2);
////El resultado es 2. Las operaciones matemáticas hacen que los string se interpreten como números.

console.log("4px" - 2);
//El resultado es NaN. Como tiene operación matemática intentará transformar el string en número, pero no podrá.

console.log("  -9  " + 5);
//El resultado es " -9  5". Empieza por string así que se concatena.

console.log("  -9  " - 5);
//El resultado es -14. La resta si fuerza la operación aritmética.
console.log(null + 1);
//El resultado es 1. El valor numérico de null es 0.

console.log(undefined + 1);
//El resultado es NaN. El valor númerico de undefined es NaN.

console.log(" \t \n" - 2);
//El resultado es -2. No hay valor para restar al 2, así que se queda como -2.