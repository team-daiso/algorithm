function solution(left, right, answer = 0) {
  for (i = left; i <= right; i++) {
    answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
  }
  return answer;
}
