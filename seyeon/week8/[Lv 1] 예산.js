function solution(d, budget) {
  d.sort((a, b) => a - b);

  for (var i = 0; budget >= 0; i++) {
    budget -= d[i];
  }

  return i - 1;
}
