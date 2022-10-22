/**
 * 1분동안 초를 세는 프로그램을 만들려고 한다.
 * setTimeout을 이용해 0초부터 시작해서 1분까지만 세는 프로그램을 구현하라.
 * setTimeout은 timer 함수를 선언한 뒤 그 안에서 실행하도록 구성하라.
 */

'use strict';

function timer(time) {
  for (let second = 0; second <= time; second++) {
    setTimeout(function () {
      console.log(second);
    }, 1000 * second);
  }
}

timer(60);
