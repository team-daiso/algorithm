function solution(arr) {
  const minIdx = arr.indexOf(Math.min(...arr));
  arr.splice(minIdx, 1);

  return arr.length ? arr : [-1];
}

// 이건 훨씬 오래 걸리네요!  ==> Math.min(...arr)을 변수로 따로 빼주면 됨
function solution(arr) {
  const result = arr.filter((num) => num !== Math.min(...arr));
  return result.length ? result : [-1];
}

// Math.min(...arr) 변수로 선언
function solution(arr) {
  if (arr.length === 1) return [-1];

  const min = Math.min(...arr);

  return arr.filter((num) => num !== min);
}
