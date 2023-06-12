function solution(n, t, m, p) {
  let answer = "";
  let binary = "";

  for (let i = 0; binary.length < t * m; i++) {
    binary += i.toString(n).toUpperCase();
  }

  for (let i = p - 1; i < t * m; i += m) {
    answer += binary[i];
  }

  return answer;
}
