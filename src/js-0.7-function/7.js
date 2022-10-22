'use strict';

const string = prompt('입력 혹은 취소');

/**
 * string 변수에 문자열을 입력받거나 취소를 눌렀을 때의 상황에 따라 결과가 달라지는 함수를 구현하라.
 * 문자열을 입력 받으면 입력받은 문자열을 알림창으로 띄운다.
 * 취소를 눌렀다면 취소라는 문자열을 알림참으로 띄운다.
 * 단, 이 함수는 콜백 함수 호출을 적용해야한다.
 */

function okFunc() {
  alert(string);
}

function cancelFunc() {
  alert('취소');
}

function okOrCancel(ok, cancel) {
  if (string) {
    ok();
  } else {
    cancel();
  }
}

okOrCancel(okFunc, cancelFunc);
