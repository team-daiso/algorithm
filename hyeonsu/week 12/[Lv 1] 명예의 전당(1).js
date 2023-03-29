function solution(k, score) {
  // k는 명예의 전당.length
  // score는 각 일차의 점수들
  const hallOfFame = [];
  const answer = [];
  score.map((el, idx) => {
    if (idx < k) {
      hallOfFame.push(el);
    } else {
      if (hallOfFame[hallOfFame.length - 1] <= el) {
        hallOfFame.pop();
        hallOfFame.push(el);
      }
    }
    hallOfFame.sort((a, b) => b - a);
    answer.push(hallOfFame[hallOfFame.length - 1]);
  });
  return answer;
}
