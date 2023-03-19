function solution(answers) {
  var answer = [];
  let giveUp1 = "12345".repeat(2000).split("");
  let giveUp2 = "21232425".repeat(1250).split("");
  let giveUp3 = "3311224455".repeat(1000).split("");
  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == giveUp1[i]) {
      result[0]++;
    }
    if (answers[i] == giveUp2[i]) {
      result[1]++;
    }
    if (answers[i] == giveUp3[i]) {
      result[2]++;
    }
  }
  let max = Math.max(...result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === max) answer.push(i + 1);
  }
  return answer;
}
