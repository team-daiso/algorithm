function solution(a, b, n) {
  var answer = 0;

  // 교환 가능한 수량이 아닐때까지 반복
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
}
