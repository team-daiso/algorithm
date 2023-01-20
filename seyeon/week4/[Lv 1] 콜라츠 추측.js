let count = 0;

function solution(num) {
  if (num === 1) return 0;

  return collatz(num);
}

function collatz(num) {
  if (num === 1) return count;
  if (500 <= count) return -1;

  if (num % 2 === 0) num /= 2;
  else num = num * 3 + 1;

  count++;

  return collatz(num);
}
