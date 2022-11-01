"use strict";

if (-1 || 0) alert("primero");
//Se ejecuta. El valor de -1 es verdadero.

if (-1 && 0) alert("segundo");
//No se ejecuta. El resultado del AND es 0, y este no es verdadero

if (null || (-1 && 1)) alert("tercero");
//Se ejecuta. El && tiene prefetencia, y el resultado de null || 1, es 1
