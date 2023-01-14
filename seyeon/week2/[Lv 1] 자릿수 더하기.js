function solution(n) {
  const sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  return sum;
}
