'use strict';

const person = {};

/**
 * 위의 비어있는 person 객체를 건드리지 않고 이 주석 아래에서 프로퍼티를 추가하고 출력하라.
 * 프로퍼티를 추가할 때에는 반복문을 사용하며 총 5개의 프로퍼티를 원하는 이름으로 입력받아 추가한다.
 * 참고로 프로퍼티는 키와 밸류가 세트이다. (총 10번의 입력을 받아야한다는 소리.)
 */

for (let i = 0, key, value; i < 5; i++) {
  key = prompt('키를 입력하세요.');
  value = prompt(`${key}의 값을 입력하세요.`);

  person[key] = value;
}

for (let key in person) {
  console.log(`${key}의 값: ${person[key]}`);
}
