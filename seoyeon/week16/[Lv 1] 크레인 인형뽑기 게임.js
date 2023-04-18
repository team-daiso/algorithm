function solution(board, moves) {
  let hash = {};
  let bucket = [];
  let count = 0;

  // 위치 별로 인형 위치 재정렬, 1번 인덱스 애들 먼저 뽑혀애 되서, 거꾸로 for문을 돌려서 넣어줍니다.
  for (let i = board.length - 1; i >= 0; --i) {
    board[i].forEach((v, idx) =>
      v ? (hash[idx + 1] ? hash[idx + 1].push(v) : (hash[idx + 1] = [v])) : ""
    );
  }

  for (let move of moves) {
    if (hash[move]) {
      // 이 조건이랑
      let doll = hash[move].pop();
      if (doll) {
        // 이 조건이 없으면, 1,2번을 통과하지 못함... 위치에 인형이 아에 없거나, 뺄수 있는 인형이 없는 경우가 있어서 그런거 같아욤..
        bucket.push(doll);
        let lastDoll = bucket.length - 1;
        // bucket안의 앞에 인형만 같은지 체크하면 됨
        if (bucket[lastDoll] === bucket[lastDoll - 1]) {
          bucket.pop();
          bucket.pop();
          count += 2;
        }
      }
    }
  }
  return count;
}
