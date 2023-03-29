function solution(n, left, right) {
  // left에서 right 사이까지만 구한다
  const newArr = [...Array(right - left + 1)];

  // left 전의 인덱스는 필요없으므로 i + left부터 돈다
  return newArr.map((el, i) => (el = Math.max((i + left) % n, Math.floor((i + left) / n)) + 1));
}
