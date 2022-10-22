'use strict';

const labels = ['이름', '국어 점수', '영어 점수', '수학 점수', '총점', '평균'];
const studentScore = {};

/**
 * 1. 학생의 이름과 국어, 영어, 수학 성적을 입력받아 객체에 키와 밸류의 형태로 저장한다.
 * 2. 저장한 객체를 이용해 웹 페이지에 테이블의 형태로 출력한다.
 */

for (let i = 0; i < labels.length; i++) {
  studentScore[labels[i]] = prompt(`${labels[i]} : `);
}
