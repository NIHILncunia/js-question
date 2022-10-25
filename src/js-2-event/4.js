/**
 * 세로 스크롤이 600 이상일 때 body의 배경색을 붉게 만드는 이벤트를 구현하라.
 * 600 미만이 되면 다시 원래대로 돌아와야한다.
 */

'use strict';

window.addEventListener('scroll', function () {
  this.document.body.style.transition = 'background .5s';
  if (scrollY >= 600) {
    this.document.body.style.backgroundColor = 'red';
  } else {
    this.document.body.style.backgroundColor = 'white';
  }
});
