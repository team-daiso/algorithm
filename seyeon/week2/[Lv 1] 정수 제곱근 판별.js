function solution(n) {
  const sqrt = Math.sqrt(n);
  // 제곱근이 정수가 아니라면, 1로 나눴을 때 나머지가 존재
  // 나머지가 있으면 -1, 아니면 sqrt+1의 제곱을 리턴
  return sqrt % 1 ? -1 : (sqrt + 1) ** 2;
}
