function solution(answers) {
  // answer는 1번부터 마지막까지 정답임
  // 수포자들은 3번까지 있음
  const answersLen = answers.length;
  const results = [];
  const novice1 = [1, 2, 3, 4, 5];
  const novice1Len = novice1.length;
  const novice2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const novice2Len = novice2.length;
  const novice3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const novice3Len = novice3.length;
  const noviceAnswers = [0, 0, 0];

  answers.map((answer, idx) => {
    if (novice1[idx % novice1Len] === answer) noviceAnswers[0]++;
    if (novice2[idx % novice2Len] === answer) noviceAnswers[1]++;
    if (novice3[idx % novice3Len] === answer) noviceAnswers[2]++;
  });
  const mostAnswer = Math.max(...noviceAnswers);
  noviceAnswers.map((noviceAnswer, idx) => {
    if (noviceAnswer === mostAnswer) {
      results.push(idx + 1);
    }
  });
  return results;
}
