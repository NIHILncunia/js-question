'use strict';

/**
 * 주어진 string 변수에서 a를 전부 찾아 A로 변경하라.
 */

let string = 'asdasdasdasdasdasdasdasd';
let result = '';
console.log(string);

for (let char of string) {
  if (char === 'a') {
    result += 'A';
  } else {
    result += char;
  }
}

console.log(result);
