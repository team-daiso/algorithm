function solution(survey, choices) {
  const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const types = ["RT", "CF", "JM", "AN"];

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] === 4) continue;

    const type = choices[i] < 4 ? survey[i][0] : survey[i][1];
    scores[type] += Math.abs(4 - choices[i]);
  }
  return types
    .map((type) => (scores[type[0]] >= scores[type[1]] ? type[0] : type[1]))
    .join("");
}
