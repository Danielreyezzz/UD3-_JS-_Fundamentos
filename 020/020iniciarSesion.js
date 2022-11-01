"use strict";
let userName = prompt("Escribe tu usuario: ");

if (userName == "Admin") {
  let password = prompt("Escribe la contraseña: ");

  if (password == "TheBoss") {
    alert("Bienvenido a tu reino, jefe");
  } else if (password == "" || password == null) {
    alert("Cancelado.");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (userName == "" || userName == null) {
  alert("Cancelado");
} else {
  alert("No te conozco");
}
