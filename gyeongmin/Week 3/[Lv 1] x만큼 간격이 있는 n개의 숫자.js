function solution(x, n) {
  var answer = [];
  let i = 1;
  while (i <= n) {
    answer.push(x * i);
    i++;
  }
  return answer;
}
