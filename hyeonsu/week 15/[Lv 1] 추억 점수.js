function solution(name, yearning, photo) {
  const answer = [];
  const hash = {};
  for (let i = 0; i < name.length; i++) {
    hash[name[i]] = yearning[i];
  }
  photo.forEach(el => {
    let score = 0;
    el.forEach(name => {
      if (hash[name]) score += hash[name];
    });
    answer.push(score);
  });
  return answer;
}
