function solution(s, n) {
  let answer = "";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else
      answer += lower.includes(s[i])
        ? lower[(lower.indexOf(s[i]) + n) % 26]
        : upper[(upper.indexOf(s[i]) + n) % 26];
  }
  return answer;
}
