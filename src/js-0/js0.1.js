// 1에서 20까지의 누적합을 구하는 프로그램을 구현하시오.
// 변수는 total 한가지로 제한한다.

'use strict';

let total = 0;

for (let i = 1; i <= 20; i++) {
  total += i;
}

console.log(total);
