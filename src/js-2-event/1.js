/**
 * button 태그를 불러오고 h1 태그를 불러온 후에
 * 버튼을 클릭할 시에 h1의 텍스트가 바뀌는 프로그램을 구현하라.
 * 텍스트가 어떻게 변해도 무관하다. 단, 한 번 더 클릭하면 원래대로 돌아와야한다.
 * 즉, 상태가 변했다가 원래대로 돌아오는 것이 반복될 수 있어야한다.
 */

'use strict';

const $button = document.querySelector('button');
const $header1 = document.querySelector('h1');
const origin = $header1.textContent;

$button.addEventListener('click', function () {
  if ($header1.textContent === origin) {
    $header1.textContent = '바뀐 제목';
  } else {
    $header1.textContent = origin;
  }
});
