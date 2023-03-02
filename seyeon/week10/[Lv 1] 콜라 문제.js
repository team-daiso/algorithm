function solution(a, b, n) {
  let count = 0;
  let exchange = 0;

  while (n >= a) {
    exchange = ~~(n / a) * b;
    count += exchange;
    n = (n % a) + exchange;
  }

  return count;
}
