function solution(survey, choices) {
  let answer = "";
  const score = { A: 0, C: 0, F: 0, J: 0, M: 0, N: 0, R: 0, T: 0 };
  survey.forEach((el, idx) => {
    const choice = choices[idx] - 4;
    score < 0 ? (score[el[0]] -= choice) : (score[el[1]] += choice);
  });
  score.R >= score.T ? (answer += "R") : (answer += "T");
  score.C >= score.F ? (answer += "C") : (answer += "F");
  score.J >= score.M ? (answer += "J") : (answer += "M");
  score.A >= score.N ? (answer += "A") : (answer += "N");
  return answer;
}
