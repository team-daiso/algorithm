function solution(m, n, board) {
  // board가 문자열로되어있는 일차원 배열이기 때문에 2차원 배열로 바꿔줍니다.
  board = board.map((row) => Array.from(row));

  while (true) {
    const find = [];
    // 2x2로 같은 것이 있는지 검색합니다.
    // 예를 들어 현재 y, x가 1,1 이라면 2,2까지 검색을 하기 때문에 경계값을 m과 n에서 1을 빼주어야 합니다.
    for (let y = 0; y < m - 1; y += 1) {
      for (let x = 0; x < n - 1; x += 1) {
        const pick = board[y][x];
        if (
          pick &&
          pick === board[y][x + 1] &&
          pick === board[y + 1][x] &&
          pick === board[y + 1][x + 1]
        ) {
          find.push([y, x]);
        }
      }
    }

    // find가 없다면 중복되는것이 없다는것이므로 종료합니다.
    // 2차원 배열에서 0인 값들의 갯수가 정답입니다. 중복되는것들을 0으로 바꿔줬으니까요..!
    // 더 편하게 계산하기 위해서 2차원 배열을 1차원으로 변환해서 구합니다.
    if (!find.length) return board.flat().filter((v) => !v).length;

    // 중복되는것들의 시작 죄표를 저장해놓았으니 이제 0으로 변환해줍니다.
    find.forEach(([y, x]) => {
      board[y][x] = 0;
      board[y][x + 1] = 0;
      board[y + 1][x] = 0;
      board[y + 1][x + 1] = 0;
    });

    // 이제 0인것들을 없애고 위에서 아래로 내려야합니다.
    // 이 경우에는 아래에서부터 탐색을 해야합니다. 밑에서부터 0이라면 위에있는 것을 내려야하기 때문이죠.
    for (let y = m - 1; y >= 0; y -= 1) {
      for (let x = 0; x < n; x += 1) {
        // 0이 아닌것을 찾기 위해 for문을 하나 더 만들어 줍니다.
        // 현재 시작점이y이므로 y보다 하나 위에 있는 것부터 비교를 합니다.
        for (let i = y - 1; i >= 0; i -= 1) {
          if (board[y][x]) break;
          // 현재 y,x가 0이고(사라진 공간이고), board[i][x]가 0이 아니라면(사라진 공간을 제외하고 가장 처음만난 블럭이라면)
          // y,x와 i,x를 바꿔줍니다. 즉, 사라진 공간을 없애고 블럭으로 채웁니다.
          if (board[i][x]) {
            board[y][x] = board[i][x];
            board[i][x] = 0;
            break;
          }
        }
      }
    }
  }
}
