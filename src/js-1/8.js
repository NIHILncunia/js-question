'use strict';

/**
 * 주어진 문자열 배열을 매개변수에 전달하고 각 문자열 요소의 길이를 담은 배열을 반환하는 함수를 작성하라.
 */

const arr = [ 'We', 'are', 'the', 'world!', ];

function getLength(array) {
  let counts = [];

  for (let i = 0; i < array.length; i++) {
    counts[i] = array[i].length;
  }

  return counts;
}

console.log(arr);
console.log(getLength(arr));
