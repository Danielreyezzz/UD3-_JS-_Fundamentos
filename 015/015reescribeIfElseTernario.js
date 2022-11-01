"use strict";

let login = "profesor";

let message;

message =
  login == "alumno"
    ? "Hola estudiante, tiene 10 tareas pendientes"
    : login == "profesor"
    ? "Buenos días, tiene que calificar 1000 actividades"
    : login == ""
    ? "Sin sesión, estudie algo"
    : "Login incorrecto. O profesor o alumno";

alert(message);
