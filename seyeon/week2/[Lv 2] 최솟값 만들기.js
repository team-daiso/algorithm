function solution(A, B) {
  // 오름차순으로 A 정렬
  A.sort((a, b) => a - b);
  // 내림차순으로 B 정렬
  B.sort((a, b) => b - a);

  return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}
