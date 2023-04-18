function solution(s) {
  let answer = 0;
  let arr = [0, 0];
  let first = s[0];
  for (let i = 0; i < s.length; i++) {
    first === s[i] ? (arr[0] += 1) : (arr[1] += 1);
    if (arr[0] === arr[1]) {
      answer++;
      first = s[i + 1];
      arr = [0, 0];
    }
    if (i === s.length - 1 && first !== undefined) answer++;
  }

  return answer;
}
