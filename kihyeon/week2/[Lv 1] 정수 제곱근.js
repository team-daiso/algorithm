function solution(n) {
  let sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}
