function solution(n) {
  let answer = String(n)
    .split("")
    .reverse()
    .map((el) => Number(el));
  return answer;
}
