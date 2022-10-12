'use strict';

/**
 * 1. 주어진 문자열에서 양 옆 공백을 지운채로 step1 변수에 저장하라.
 * 2. 해당 문자열에서 모든 공백을 지워서 step2 변수에 저장하라.
 */

let string = '               123   4    56    7 9   0  ';
console.log(string);

let step1 = string.trim();
console.log(step1);

step1.replace(' ', '');
console.log(step1.includes(' '));

let step2 = step1;

while (1) {
  if (step2.includes(' ')) {
    step2 = step2.replace(' ', '');
  } else {
    break;
  }
}

// let step2 = step1.split(' ').join('');

console.log(step2);
