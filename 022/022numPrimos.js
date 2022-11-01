"use strict";
let n = 14;

primos: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue primos;
  }
  console.log(i);
}
