/**
 * 버튼을 클릭하면 숫자가 올라가는 프로그램을 구현하라.
 * 숫자가 올라갈 때 5의 배수가 되면 h1 태그에 red 클래스를 주고 아닐 때에는 red 클래스가 없어야한다.
 */

'use strict';

const $number = document.querySelector('h1');
const $button = document.querySelector('button');

$button.addEventListener('click', function () {
  console.log('클릭됨');
  $number.textContent = +$number.textContent + 1;

  if ($number.textContent % 5 === 0) {
    $number.classList.add('red');
  } else {
    $number.classList.remove('red');
  }
})
