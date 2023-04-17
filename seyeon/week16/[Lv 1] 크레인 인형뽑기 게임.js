function solution(board, moves) {
  const basket = [];
  let result = 0;

  for (let move of moves) {
    for (let line of board) {
      const doll = line[move - 1];

      // 인형이 없는 빈칸이라면 다음 줄 탐색
      if (!doll) continue;

      // 인형이 있던 자리에 0을 할당하여 빈칸임을 표시
      line[move - 1] = 0;

      if (basket[basket.length - 1] === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }

      break;
    }
  }

  return result;
}
