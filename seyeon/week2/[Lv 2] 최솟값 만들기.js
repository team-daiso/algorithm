function solution(A, B) {
  let result = 0;
  // 오름차순으로 A 정렬
  const acsendingA = A.sort((a, b) => a - b);
  // 내림차순으로 B 정렬
  const descendingB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    result += acsendingA[i] * descendingB[i];
  }

  return result;
}
