function solution(k, score) {
  let answer = [];
  let sortedScore = [];

  for (let i = 1; i <= score.length; i++) {
    sortedScore = score.slice(0, i).sort((a, b) => b - a);
    answer.push(
      sortedScore.length < k ? sortedScore.pop() : sortedScore[k - 1]
    );
  }

  return answer;
}
