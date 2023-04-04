function solution(lottos, win_nums) {
  let correct = 0;
  let zero = 0;
  // 일치 번호 수: 순위
  const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) correct++;
    else if (lotto === 0) zero++;
  });

  return [ranking[correct + zero], ranking[correct]];
}
