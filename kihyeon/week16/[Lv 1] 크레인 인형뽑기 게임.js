function solution(board, moves) {
  let count = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let item = board[j][moves[i] - 1];
      if (item > 0) {
        if (item === basket[basket.length - 1]) {
          basket.pop();
          count += 2;
        } else {
          basket.push(item);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return count;
}
