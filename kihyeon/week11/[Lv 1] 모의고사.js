function solution(answers) {
  let answer = [];
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % supo1.length]) score[0]++;
    if (answers[i] === supo2[i % supo2.length]) score[1]++;
    if (answers[i] === supo3[i % supo3.length]) score[2]++;
  }

  const highest = Math.max(score[0], score[1], score[2]);
  for (let i = 0; i < score.length; i++) {
    if (highest === score[i]) answer.push(i + 1);
  }

  return answer;
}
