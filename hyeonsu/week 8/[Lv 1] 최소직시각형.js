function solution(sizes) {
  // sizes는 2차원 배열
  // 변수 max 와 min을 선언하고 0 할당
  // sizes의 모든 요소를 돌면서
  let max = 0;
  let min = 0;
  for (let el of sizes) {
    const tMax = Math.max(...el);
    const tMin = Math.min(...el);
    if (tMax > max) {
      max = tMax;
    }
    if (tMin > min) {
      min = tMin;
    }
  }
  return max * min;
}
