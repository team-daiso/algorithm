function solution(n) {
  const numOfCases = [1, 1];

  for (let i = 2; i <= n; i++) {
    numOfCases[i] = (numOfCases[i - 2] + numOfCases[i - 1]) % 1234567;
  }

  return numOfCases[n];
}
