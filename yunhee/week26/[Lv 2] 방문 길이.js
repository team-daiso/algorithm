// 테케 1 ~ 5만 통과
function solution(dirs) {
  // 캐릭터가 처음 걸어본 길의 길이 반환
  // 좌표평면의 경계를 넘어가는 명령어는 무시
  const location = [0, 0];
  const visited = new Array();
  let count = 0; // 지나갔던 좌표인 경우
  let invalid = 0; // 좌표를 벗어난 경우
  const direction = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let dir of dirs) {
    const x = location[0] + direction[dir][0];
    const y = location[1] + direction[dir][1];

    if (x < -5 || y < -5 || x > 5 || y > 5) {
      invalid++;
      continue;
    }

    location[0] = x;
    location[1] = y;

    // 이미 지나갔던 좌표라면
    if (visited.includes(`${x}${y}`)) count++;
    else visited.push(`${x}${y}`);
  }

  return count === 0
    ? dirs.length - invalid
    : dirs.length - (Math.floor(count / 2) + 1) - invalid;
}

// 다른 사람 풀이
function solution(dirs) {
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let route = new Set();

  for (let dir of dirs) {
    let nowX = now[0] + move[dir][0];
    let nowY = now[1] + move[dir][1];

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    route.add("" + now[0] + now[1] + nowX + nowY);
    route.add("" + nowX + nowY + now[0] + now[1]);

    now = [nowX, nowY];
  }

  return route.size / 2;
}
