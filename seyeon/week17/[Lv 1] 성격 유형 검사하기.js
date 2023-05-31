function solution(survey, choices) {
  let result = '';
  const type = {
    RT: [0, 0],
    CF: [0, 0],
    JM: [0, 0],
    AN: [0, 0],
  };

  choices.forEach((choice, i) => {
    if (choice !== 4) {
      const target = choice <= 3 ? survey[i][0] : survey[i][1];
      const key = [...survey[i]].sort().join('');
      const idx = key.indexOf(target);

      type[key][idx] += Math.abs(4 - choice);
    }
  });

  for (let key in type) {
    result += type[key][0] >= type[key][1] ? key[0] : key[1];
  }

  return result;
}
