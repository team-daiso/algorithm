function solution(s) {
  let x = "";
  let countX = 0;
  let countNotX = 0;
  let answer = 0;

  [...s].forEach((_, i) => {
    if (x === "") x = s[i];
    s[i] === x ? countX++ : countNotX++;
    if (countX === countNotX) {
      answer++;
      x = "";
    }
  });
  if (x !== "") answer++;
  return answer;
}
