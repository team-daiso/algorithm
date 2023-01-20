function solution(a, b) {
  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}

// 이렇게도 해봤는데 진짜 말도 안되게 느림!!
function solution(a, b) {
  // a와 b 사이에 존재하는 정수 개수만큼 빈 배열을 만든다 ===> a와 b 사이의 수들을 전부 배열에 채운다 ===> 배열의 수들을 전부 합산한다
  const sum = [...Array(Math.abs(a - b) + 1)].map((_, i) => Math.min(a, b) + i).reduce((acc, cur) => acc + cur);

  return sum;
}
