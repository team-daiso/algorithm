let count = 0;

function solution(num) {
  return collatz(num);
}

function collatz(num) {
  if (num === 1) return count;
  if (500 <= count) return -1;

  num = num % 2 === 0 ? num / 2 : num * 3 + 1;

  count++;

  return collatz(num);
}
