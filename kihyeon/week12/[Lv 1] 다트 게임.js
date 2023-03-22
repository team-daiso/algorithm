// for문으로 dartResult를 돈다
// 숫자를 만나면 round+=1
// 3개의 중첩 배열을 만들고 배열마다 해당 라운드의 계산을 함
// 각 라운드의 계산 값을 합친다

function solution(dartResult) {
  const answerArr = [0, 0, 0];
  let round = -1;

  for (let i = 0; i < dartResult.length; i++) {
    if (!Number.isNaN(Number(dartResult[i]))) {
      if (Number(dartResult[i]) === 0 && answerArr[round] === 1) {
        // 10일 경우
        answerArr[round] = 10;
        continue;
      }
      round += 1;
      answerArr[round] = Number(dartResult[i]);
    } else if (dartResult[i] === "D") {
      answerArr[round] **= 2;
    } else if (dartResult[i] === "T") {
      answerArr[round] **= 3;
    } else if (dartResult[i] === "*") {
      answerArr[round] *= 2;
      answerArr[round - 1] *= 2;
    } else if (dartResult[i] === "#") {
      answerArr[round] *= -1;
    }
  }

  return answerArr.reduce((acc, cur) => acc + cur);
}
