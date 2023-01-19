function solution(num) {
  let add = String(num)
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  return num % add === 0;
}
