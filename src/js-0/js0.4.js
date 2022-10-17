// 1에서 100까지 3의 배수의 합을 구하는 프로그램을 구현하시오.
// 변수는 total 하나로 한정.

'use strict';

let total = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    total += i;
  }
}

console.log(total);
