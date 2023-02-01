function solution(a, b) {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}
