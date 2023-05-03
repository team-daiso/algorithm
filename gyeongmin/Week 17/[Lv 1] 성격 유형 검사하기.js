function solution(survey, choices) {
  const personality = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  const no = [4, 3, 2, 1];
  const yes = [4, 5, 6, 7];
  for (i = 0; i < survey.length; i++) {
    yes.includes(choices[i])
      ? (personality[survey[i][1]] += yes.indexOf(choices[i]))
      : (personality[survey[i][0]] += no.indexOf(choices[i]));
  }
  function Add(a, b) {
    return personality[a] >= personality[b] ? `${a}` : `${b}`;
  }
  return `${Add("R", "T")}${Add("C", "F")}${Add("J", "M")}${Add("A", "N")}`;
}
