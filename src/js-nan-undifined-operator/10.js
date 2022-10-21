'use strict';

let prevWord, word;

/**
 * 변수 prevWord 이전 단어를 의미한다. word는 현재 단어를 의미한다.
 *
 * 1. 단어는 입력을 받아 저장한다.
 * 2. 이전 단어의 마지막 글자와 현재 단어의 첫 글자를 비교해서 일치하면 성공 아니면 실패.
 * 3. 실패시에는 재입력을 받도록 만든다.
 * 4. 무한루프를 활용한다.
 */

while (1) {
  if (!prevWord) {
    prevWord = prompt('단어를 입력하세요.');
  }

  if (prevWord.length > 1) {
    word = prompt(`다음 단어를 입력하세요. (이전 단어: ${prevWord})`);

    if (prevWord[prevWord.length - 1] === word[0]) {
      alert('성공!');
      prevWord = word;
    } else {
      alert('실패! 다시 시도하세요!');
    }
  }
}
