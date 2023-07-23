// Maximum call stack size 초과(node.js 는 11420, 문제 n의 수는 최대 60,000)
function solution(n) {
  const arr = [1, 1, 2];

  function fibonacci(n) {
    if (arr[n]) return arr[n];

    arr[n] = (fibonacci(n - 1) + fibonacci(n - 2)) % 1000000007;

    return arr[n];
  }

  return fibonacci(n);
}
/*
  n이 1이라면, 세로가 2 가로가 2 => 1가지
  n이 2라면, 세로가 2 가로가 2 => 2가지
  n이 3이라면, 세로가 2 가로가 3 => 3가지
  n이 4라면, 세로가 2 가로가 4 => 5가지
  n이 5라면, 세로가 2 가로가 5 => 8가지
  => 피보나치
  */
