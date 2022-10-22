'use strict';

let input1, input2, input3;

/**
 * 변수 input1, input2, input3에 각각 값을 입력받는다.
 * 셋 중 하나라도 값이 비어있거나 null이라면 '하나 이상의 입력에 값이 없음' 문자열을 출력하고
 * 셋 전부 값이 있다면 입력한 값들을 순서대로 출력하는 프로그램을 구현하라.
 * 추가적인 변수는 result로 제한한다.
 */

let result;

input1 = prompt('1번을 입력하세요.');
input2 = prompt('2번을 입력하세요.');
input3 = prompt('3번을 입력하세요.');

if (input1 && input2 && input3) {
  result = `${input1} ${input2} ${input3}`;
} else {
  result = '하나 이상의 입력에 값이 없음.';
}

console.log(`결과: ${result}`);
