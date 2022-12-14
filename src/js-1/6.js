'use strict';

/**
 * 옆집 꼬맹이가 당신에게 숫자가 적힌 구슬을 상자에 잔뜩 담아서 선물로 줬다.
 * 상자를 숫자가 담긴 배열이라고 생각했을 때 숫자 6의 개수를 구해라.
 *
 * 배열을 문자열로 만드는 메소드 join()를 이용하라. 괄호에는 구분자가 들어간다.
 * split() 메소드가 구분자를 기준 삼아 제외하고 쪼개준다면
 * join()은 구분자를 '포함해서' 합쳐줌.
 */

const box = [ 6, 66, 16, 62, 64, 26, 60, ];
// const result = box.join('').split('6').length - 1;

let result = 0;

for (let i = 0; i < box.join('').length; i++) {
  if (box.join('')[i] === '6') {
    result++;
  }
}

console.log(box);
console.log(result);
