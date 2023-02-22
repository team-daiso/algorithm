function solution(number) {
  // number는 배열
  // 이 중 요소 3개를 뽑았을 때 0이 된다면 그 학생들을 삼총사라고 함.
  // 012 013 014 015 023 024 025 ... 뭐 이런식으로 더해주면 됨
  // 3중반복문 가능 할지?
  let count = 0;

  for (let i = 0; i <= number.length - 3; i++) {
    for (let j = i + 1; j <= number.length - 2; j++) {
      for (let k = j + 1; k <= number.length - 1; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
