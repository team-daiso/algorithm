function solution(n) {
  let battery = 0;

  // 도착지(n)에서 출발지(0)로 가면서, 몇 번의 점프를 했는 지 찾기
  // n이 짝수면 순간이동, 홀수면 점프
  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      battery++;
    }
  }

  return battery;
}
