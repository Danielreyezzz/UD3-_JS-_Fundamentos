"use strict";

alert(null || 2 || undefined);
//Devuelve 2 ya que es el primer y  único valor verdadero

alert(alert(1) || 2 || alert(3));
//Delvuelve el 1 y luego el 2.
//El 1 porque entra en el alert antes de llegar a hacer la comprobación
//El 2 porque se comprueba que es el primer valor verdadero.

alert(1 && null && 2);
//Devuelve null. Siempre que haya un null en un && devolverá este.

alert(alert(1) && alert(2));
//Devuelve 1 y undefined
//El 1 porque se topa con el primer alert antes de toparse con ningun operador lógico
//undefined porque, una vez comparados, la función alert() no tiene definición.

alert(null || (2 && 3) || 4);
//Devuelve el 3. En su comparación con && , el primer valor es verdadero por lo que devuelve el segundo
//En las comparaciones con || , el primer valor verdadero se encuentra en la comparación 2 && 3, por lo que devuelve el resultado de esta
