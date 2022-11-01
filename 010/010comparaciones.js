"use strict";

console.log(5 > 4);
//El resultado es true. La condición se cumple (5 es mayor a 4).

console.log("apple" > "microsoft");
//El resultado es false. El primer caracter de "apple" es menor que el primer caracter de "microsoft"

console.log("2" > "12");
//El resultado es true. El 2 es mayor caracter que el primer caracter del 12, es decir el 1.

console.log(undefined == null);
//El resultado es true. Ninguno tiene valor, por lo que equivalen a lo mismo.

console.log(undefined === null);
//El resultado es false. La 'triple =' hace una comparación estricta, y resulta que null es object, pero undefined no está definido.

console.log(null == "\n0\n");
//El resultado es false. Null quiere decir que su valor es nulo, pero el string a comprar si que tiene valor definido

console.log(null === +"\n0\n");
//El resultado es false. Es una comparación estricta entre dos tipos distintos de valores.
