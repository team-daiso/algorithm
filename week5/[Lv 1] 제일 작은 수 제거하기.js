function solution(arr) {
  const minIdx = arr.indexOf(Math.min(...arr));
  arr.splice(minIdx, 1);

  return arr.length ? arr : [-1];
}

// 이건 훨씬 오래 걸리네요!
function solution(arr) {
  const result = arr.filter((num) => num !== Math.min(...arr));
  return result.length ? result : [-1];
}
