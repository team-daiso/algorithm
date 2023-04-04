function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let zeroCount = 0;
  let matchCount = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCount++;
    } else if (win_nums.includes(lottos[i])) {
      matchCount++;
    }
  }

  const minRank = rank[matchCount];
  const maxRank = rank[matchCount + zeroCount];

  return [maxRank, minRank];
}
