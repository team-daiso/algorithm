function solution(n, a, b) {
  // 라운드를 변수로 선언
  // 홀짝 확인 -> 홀이면 +1과 붙음 / 짝이면 -1과 붙음
  // a의 홀짝에 따라 +-1 한 수가 b인지 확인
  // -> b면 현재 라운드 리턴
  // -> b가 아니면 a와 b를 2로 나누고 올림함 -> 다음 라운드 번호
  // 확인 -> 다음 라운드 반복

  let round = 1;
  const isMatch = () => (a % 2 ? a + 1 === b : a - 1 === b);
  while (!isMatch()) {
    round++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return round;
}

// 2로 나누고 올림하고 같은지만 비교해주면 됨
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
