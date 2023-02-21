function solution(n, m) {
  // n과 m 의 최대공약수와 최소 공배수
  // 유클리드 호제법  = n,m의 최대공약수는 둘을 나눈 값을 r 이라고 할 때 둘중 작은수, r 과 같다는 것
  const gcd = (n, m) => {
    return m % n === 0 ? n : gcd(m % n, n) // 최대공약수
  };
  let gcdResult = gcd(n, m)
  const lcd = (n * m) / gcdResult;
  const answer = [gcdResult, lcd];
  return answer;
}