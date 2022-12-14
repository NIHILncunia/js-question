'use strict';

/**
 * 주어진 배열의 요소들이 문자열인지 숫자인지 판별하는 로직을 구현하라.
 *
 * 1. 반복문을 함께 사용해야 할 것이다.
 * 2. 문자열과 숫자의 개수를 마지막에 출력하라.
 * ex) 문자열: 7 / 숫자: 3
 */

const array = [ '아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13, ];
let stringCount = 0;
let numberCount = 0;

for (let i = 0; i < array.length; i++) {
  if (isNaN(array[i])) {
    stringCount++;
  } else {
    numberCount++;
  }
}

console.log(array);
console.log(`문자열: ${stringCount} / 숫자: ${numberCount}`);
