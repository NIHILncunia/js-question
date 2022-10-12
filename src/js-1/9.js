'use strict';

/**
 * 주어진 숫자 number와 숫자 배열 numArray를 매개변수에 전달하고
 * numArray에서 number의 배수를 찾아 반환하는 함수를 작성하라.
 */

const numArray = [ 4, 5, 6, 7, 8, 9, 10, 11, 12, ];
const number = 3;

function getMulti(number, numArray) {
  let resultArray = [];
  let count = 0;

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % number === 0) {
      resultArray[count] = numArray[i];
      count++;
    }
  }

  return resultArray;
}

console.log(numArray, number);
console.log(getMulti(number, numArray));
