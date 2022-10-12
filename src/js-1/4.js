'use strict';

/**
 * 주어진 배열을 역순으로 정렬한 배열을 만들어라.
 */

const numList = [ 1, 0, 1, 1, 1, 3, 5, ];
const tmp = [];

for (let i = 0; i < numList.length; i++) {
  tmp[numList.length - 1 - i] = numList[i];
}

console.log(numList);
console.log(tmp);
