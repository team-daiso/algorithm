function solution(n) {
  // ((((((5000/2/2/2-1)/2/2/2/2-1)/2)-1)/2-1)/2/2/2-1)
  // 짝수면 나누기 2, 홀수면 -1을 반복
  // -1 한 횟수를 리턴

  let answer = 0;

  while (!!n) {
    n % 2 ? (n--, answer++) : (n /= 2);
  }

  return answer;
}
