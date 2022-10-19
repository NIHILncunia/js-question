'use strict';

const array = [20, '', null, undefined, '문자열', NaN, '아이유', true, null, undefined, undefined];
const result = [];

/**
 * 주어진 배열 array에서 null과 undefined를 추출한 배열을 만드는 프로그램을 구현하라.
 * 결과는 배열만 콘솔로 찍어내는 것으로 제한한다.
 */

for (let i = 0, count = 0; i < array.length; i++) {
  if ((array[i] ?? 1) === 1) {
    result[count++] = array[i];
  }
}

console.log(result);
