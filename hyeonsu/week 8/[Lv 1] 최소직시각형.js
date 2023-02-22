function solution(sizes) {
  // sizes는 2차원 배열
  // 변수 max 와 min을 선언하고 0 할당
  // sizes의 모든 요소를 돌면서
  let max = 0;
  let min = Math.min(...sizes[0]);
  for (let el of sizes) {
    if (Math.max(...el) > max) {
      max = Math.max(...el);
    }
    if (Math.min(...el) > min) {
      min = Math.min(...el);
    }
  }
  return max * min;
}
