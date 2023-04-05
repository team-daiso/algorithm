function solution(n, m, section) {
  let answer = 0;
  // 몇번 벽까지 페인트 칠 되어있는지?
  let painted = 0;
  for (let el of section) {
    if (painted <= el) {
      painted = m + el;
      answer++;
    }
  }
  return answer;
}
