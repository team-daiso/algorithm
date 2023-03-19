// 내림 차순으로 정렬
// 0,1,2 / 3,4,5 / 6,7,8
// for문 돌면서 각 인덱스의 숫자 * m 계산
// 계산값을 answer에 더함

function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}
