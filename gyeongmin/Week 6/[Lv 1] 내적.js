function solution(a, b) {
  return [...a].map((x, i) => x * b[i]).reduce((a, b) => a + b);
}
