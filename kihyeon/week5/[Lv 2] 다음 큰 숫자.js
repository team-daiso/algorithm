function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
