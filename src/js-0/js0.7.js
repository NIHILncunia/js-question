'use strict';

const numList = [10, 25, 48, 98, 57];

// 주어진 배열 numList에서 가장 큰 수와 가장 작은 수를 구하는 프로그램을 구현하시오.
// 변수는 min, max로 제한한다.

let min = numList[0], max = numList[0];

for (let i = 1; i < numList.length; i++) {
  if (numList[i] > max) {
    max = numList[i];
  }

  if (numList[i] < min) {
    min = numList[i];
  }
}

console.log(`min: ${min} / max: ${max}`);
