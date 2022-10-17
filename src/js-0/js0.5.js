// 정수 세개를 입력받고 평균을 구하는 프로그램을 구현하시오.
// 중간에 아무것도 입력하지 않거나 취소를 눌렀을 경우 다시 입력받게 만들어야한다.
// 변수는 num1~3, average로 제한한다.

'use strict';

let num1;
let num2;
let num3;
let average;

for (; ;) {
  num1 = +prompt('정수 1 : ');
  console.log(num1);
  if (num1 !== 0 || num1 !== null) {
    num2 = +prompt('정수 2 : ');
    console.log(num2);
    if (num2 !== 0 || num2 !== null) {
      num3 = +prompt('정수 3 : ');
      console.log(num3);
      if (num3 !== 0 || num3 !== null) {
        average = (num1 + num2 + num3) / 3;
        break;
      }
    }
  }
}

console.log(average);
