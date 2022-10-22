/**
 * 작은 수와 큰 수 두 개의 숫자를 매개변수로 받고 누적합을 구하는 함수를 구현하라.
 */

'use strict';

function total(min, max) {
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

console.log(total(1, 10));
console.log(total(25, 100));
