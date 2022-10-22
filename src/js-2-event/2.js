/**
 * 마우스를 호버하면 div의 배경이 바뀌는 프로그램을 구현하라.
 * CSS로 호버를 하는 것이 아닌 오로지 자바스크립트로만 구현하라.
 * 단, 배경이 바뀔 때 트랜지션을 넣어야한다.
 */

'use strict';

const $screen = document.getElementById('screen');

$screen.addEventListener('mouseenter', function () {
  this.style.backgroundColor = 'red';
});

$screen.addEventListener('mouseleave', function () {
  this.style.backgroundColor = 'black';
});
