// 이해하고 난 풀이
function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    // x좌표와 y좌표 중 큰 수 + 1이 해당 좌표의 번호
    // x좌표 => Math.floor(i / n),  y좌표 => i % n
    result.push(Math.max(~~(i / n), i % n) + 1);
  }

  return result;
}

// 이해하기 전 풀이
function solution(n, left, right) {
  // left에서 right 사이까지만 구한다
  const newArr = [...Array(right - left + 1)];

  // left 전의 인덱스는 필요없으므로 i + left부터 돈다
  return newArr.map((el, i) => (el = Math.max((i + left) % n, Math.floor((i + left) / n)) + 1));
}
