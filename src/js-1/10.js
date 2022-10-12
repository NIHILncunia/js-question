'use strict';

/**
 * 주어진 문자열을 매개변수로 전달하고 그 문자열에서 숫자를 걸러낸 후, 그 숫자들의 합을 구하는 함수를 작성하라.
 */

const string = 'aAb1B2cC34oOp';

function getTotalNumber(string) {
  const numArray = [];
  let result = 0;
  let count = 0;

  for (const char of string) {
    if (!isNaN(char)) {
      numArray[count] = +char;
      count++;
    }
  }

  for (let i = 0; i < numArray.length; i++) {
    result += numArray[i];
  }

  return result;
}

console.log(string);
console.log(getTotalNumber(string));
