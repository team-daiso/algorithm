function solution(d, budget, answer = 0, sum = 0) {
  d.sort((a, b) => a - b);

  d.forEach((el) => {
    sum += el;
    if (sum <= budget) answer++;
  });
  return answer;
}
