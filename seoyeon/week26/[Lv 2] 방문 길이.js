function solution(dirs) {
  const move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
  let cur = [0, 0];
  const moveList = new Set();

  for (const dir of dirs) {
    const nextX = cur[0] + move[dir][0];
    const nextY = cur[1] + move[dir][1];

    // 좌표평면의 경계를 넘어가는 명령어는 무시
    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

    // 순서를 바꿔가며 2번 넣어주는 이유는 가령 [0, 0] -> [0, 1] 로 이동한 길은 [0, 1] -> [0, 0] 로 이동한 길과 같기에 이미 거쳐간 길을 반대방향이라고 거쳐가지 않았다고 하면 안되서..
    moveList.add(`${cur[0]}${cur[1]}${nextX}${nextY}`);
    moveList.add(`${nextX}${nextY}${cur[0]}${cur[1]}`);

    cur = [nextX, nextY];
  }

  return moveList.size / 2; // moveList에 add로 2번 넣어줬기 때문에 나누기 2
}
