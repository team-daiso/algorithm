function solution(n, m) {
  // n과 m 의 최대공약수와 최소 공배수
  // 유클리드 호제법  = n,m의 최대공약수는 둘을 나눈 값을 r 이라고 할 때 둘중 작은수, r 과 같다는 것
  const gcd = (n, m) => {
    if (m % n === 0) {
      return n;
    } else {
      return gcd(m % n, n);
    } // 최대공약수
  };
  const lcd = (n * m) / gcd(n, m);
  const answer = [gcd(n, m), lcd];
  return answer;
}
