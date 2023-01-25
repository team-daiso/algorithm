function solution(n) {
  var answer = 0;
  let arr = Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .reduce((acc, cur) => acc + cur)
  );
  return arr;
}
