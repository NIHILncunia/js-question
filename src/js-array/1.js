// 배열 array 변수에 정수 5개를 입력받는다.
// 최소값과 최대값, 두 수의 합을 구하는 프로그램을 구현하시오.
// 변수는 array, min, max, sum으로 제한한다.

'use strict';

const array = [];
let min = 100, max = 0, sum = 0;

for (let i = 0; i < 5; i++) {
  array[i] = +prompt(`배열의 ${i + 1}번째 요소`);

  if (array[i] > max) {
    max = array[i];
  }

  if (array[i] < min) {
    min = array[i];
  }
}

sum = min + max;

document.write(`min: ${min} / max: ${max} / sum: ${sum}`);

