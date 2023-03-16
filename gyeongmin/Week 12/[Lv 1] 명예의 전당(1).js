function solution(k, score) {
  let answer = [];
  let honor = [];
  for (let i = 0; i < score.length; i++) {
    if (i + 1 <= k) {
      honor.push(score[i]);
    } else {
      if (Math.min(...honor) < score[i]) {
        honor.pop();
        honor.push(score[i]);
      }
    }
    answer.push(Math.min(...honor));
    honor.sort((a, b) => b - a);
  }
  return answer;
}
