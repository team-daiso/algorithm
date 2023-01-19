function solution(n) {
  if (String(n).length === 1) return n;
  return String(n)
    .split("")
    .reduce((prev, cur) => Number(prev) + Number(cur));
}
