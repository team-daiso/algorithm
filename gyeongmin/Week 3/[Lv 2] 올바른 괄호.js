function solution(s) {
  if (s[0] === ")") return false;
  let stackCount = 1;

  for (let i = 1; i < s.length; i++) {
    stackCount += s[i] === "(" ? 1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}
