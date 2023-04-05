function solution(n, m, section) {
  let answer = 0;
  // 몇번 벽까지 페인트 칠 되어있는지?
  let painted = 0;
  for (let el of section) {
    // 스스로도 포함하기 때문에 1을 빼줘야 함...2번에서부터 4개 색칠하면 5까지임.
    if (painted <= el) {
      painted = m + el;
      answer++;
    }
  }
  return answer;
}
