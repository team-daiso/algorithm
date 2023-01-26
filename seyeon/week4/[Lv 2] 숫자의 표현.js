function solution(n) {
  let sum = 0;
  let count = 0;
  let startNum = 1;

  if (n === 1) return 1;

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    sum += i;

    if (sum >= n) {
      if (sum === n) count++;
      sum = 0;
      i = startNum++;
    }
  }

  return count + 1;
}
