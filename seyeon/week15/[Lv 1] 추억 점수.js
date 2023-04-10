function solution(name, yearning, photos) {
  const scores = [];

  for (let photo of photos) {
    const sum = photo.reduce((acc, cur) => {
      const idx = name.indexOf(cur);
      return acc + (yearning[idx] || 0);
    }, 0);

    scores.push(sum);
  }

  return scores;
}
