function solution(n) {
  let sum = 0;
  let count = 0;
  let firstIdx = 1;

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    sum += i;

    if (sum >= n) {
      if (sum === n) count++;
      sum = 0;
      i = firstIdx++;
    }
  }

  return n === 1 ? 1 : count + 1;
}
