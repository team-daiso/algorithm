function solution(n) {
  function fib(i) {
    let fibArr = [0, 1, 1];
    let x = 3;
    while (x <= n) {
      fibArr[x] = (fibArr[x - 2] + fibArr[x - 1]) % 1234567;
      x++;
    }
    return fibArr[i];
  }
  return fib(n);
}
