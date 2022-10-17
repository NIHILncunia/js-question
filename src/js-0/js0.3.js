// 정수 두개를 입력받아서 두 수의 합을 구한 후 두수의 합이 20보다 큰지 아닌지 판별한 결과를 alert()로 알려주는 프로그램을 구현하시오.
// 변수는 num1, num2, sum 으로 제한한다.
// 중복에 대한 처리는 일단 제외한다.

'use scrict';

let num1 = +prompt('정수 1: ');
let num2 = +prompt('정수 2: ');

let sum = num1 + num2;

if (sum <= 20) {
  alert('두 수의 합은 20 이상입니다.');
} else {
  alert('두 수의 합은 20 이하입니다.');
}
