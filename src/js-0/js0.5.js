// 정수 세개를 입력받고 평균을 구하는 프로그램을 구현하시오.
// 중간에 아무것도 입력하지 않거나 취소를 눌렀을 경우 다시 입력받게 만들어야한다.
// 변수는 num1~3, average로 제한한다.

'use strict';

let num1, num2, num3;
let average;

for (; ;) {
  num1 = +prompt('정수 1:');
  if (num1 > 0) {
    num2 = +prompt('정수 2:');
    if (num2 > 0) {
      num3 = +prompt('정수 3:');
      if (num3 > 0) {
        average = (num1 + num2 + num3) / 3;
        break;
      }
    }
  }

  alert('처음부터 다시 입력하세요.');
}

alert(`${num1}, ${num2}, ${num3}의 평균: ${average}`);
