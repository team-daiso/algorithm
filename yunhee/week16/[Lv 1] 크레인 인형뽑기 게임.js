function solution(boards, moves) {
  // 같은 모양의 인형 두개가 바구니에 연속해서 쌓이면 두 인형이 터진다. 터져 사라진 인형 개수 반환
  const stack = [];
  let count = 0;

  moves.forEach((move) => {
    for (let board of boards) {
      if (board[move - 1] === 0) continue;

      const doll = board[move - 1];
      board[move - 1] = 0;

      if (doll === stack[stack.length - 1]) {
        stack.pop();
        count += 2;
      } else stack.push(doll);

      break;
    }
  });

  return count;
}
