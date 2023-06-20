function solution(maps) {
  const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const [n, m] = [maps.length, maps[0].length];
  const visit = Array.from(Array(n), (_) => Array(m).fill(0));

  visit[0][0] = 1;

  let idx = 0;
  const queue = [[0, 0]];

  while (queue.length !== idx) {
    const [posX, posY] = queue[idx];

    for (let i = 0; i < ds.length; i++) {
      // 한칸씩 이동한 newXY
      const [newX, newY] = [posX + ds[i][0], posY + ds[i][1]];

      // 막혀있다면 다른방향으로 이동
      if (newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
      // visit에 새로운 newXY가 0이고 maps 에는 1이라면
      if (!visit[newX][newY] && maps[newX][newY]) {
        visit[newX][newY] = visit[posX][posY] + 1; // 0이었던 visit을 idx+1 로 변경
        queue.push([newX, newY]); // 큐에 넣기
      }
    }
    idx++;
  }

  return visit[n - 1][m - 1] ? visit[n - 1][m - 1] : -1;
}
