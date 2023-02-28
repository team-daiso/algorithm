//7번부터 오류
//정수 오버플로우 라고 함
function solution(n) {
  function gap(i) {
    let gapArr = [1, 2, 3];
    let x = 3;
    while (x <= n) {
      // gapArr[x] =
      //   gapArr[x - 1] +
      //   (gapArr[x - 1] - gapArr[x - 2]) +
      //   (gapArr[x - 2] - gapArr[x - 3]);
      gapArr[x] = (gapArr[x - 1] * 2 - gapArr[x - 3]) % 1234567;
      x++;
    }
    return gapArr[i];
  }
  return gap(n - 1) % 1234567;
}
//1 1 return 1
//2 1+1 2 return 2
//3 1+1+1 (1+2)*2 return 3
//4 return 5
//5 1+1+1+1+1 (1+1+1+2)*4 (1+2+2)*3 return 8
//6 1+1+1+1+1+1 (1+1+1+1+2)*5 (1+1+2+2)*6 2+2+2 return 13
//7 1+1+1+1+1+1+1 (1+1+1+1+1+2)*6 (1+1+1+2+2)*10 (1+2+2+2)*4 return 21
//8 1+1+1+1+1+1+1+1 (1+1+1+1+1+1+2)*7 (1+1+1+1+2+2)*15 (1+1+2+2+2)*10 2+2+2+2 return 34

//블로그풀이
function solution(n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;

  return dp[n];
};
