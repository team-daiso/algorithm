function solution(k, m, score) {
  let profit = 0;
  let last = m - 1; // 박스에 담을 마지막 과일

  score.sort((a, b) => b - a);

  while (last < score.length) {
    profit += score[last] * m;
    last += m;
  }

  return profit;
}
