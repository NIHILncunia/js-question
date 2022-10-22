/**
 * 두개의 숫자를 매개변수로 전달받아 곱하는 함수를 구현하라.
 * 단, 즉시 실행 함수로 구현해야한다.
 */

'use strict';

let result = (function multiply(number1, number2) {
  return number1 * number2;
})(42, 20);

console.log(result);
