function solution(ingredient) {
  // 빵 야채 고기 빵 순서로 들어왔을 때 햄버거 하나 완성
  // 빵 - 1 야채 - 2 고기 - 3
  // 즉 1,2,3,1 이 되어야 함
  let answer = 0;
  let loop = true;
  let idx = 0;
  while (loop) {
    if (
      "" +
        ingredient[idx] +
        ingredient[idx + 1] +
        ingredient[idx + 2] +
        ingredient[idx + 3] ===
      "1231"
    ) {
      ingredient.splice(idx, 4);
      answer++;
      if (idx !== 0) {
        idx -= 3;
      }
    } else {
      if (idx > ingredient.length - 3) {
        loop = false;
      }
      idx++;
    }
  }
  return answer;
}
