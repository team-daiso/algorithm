function solution(s) {
  let bracket = 0;
  for (const el of s) {
    bracket += el === "(" ? 1 : -1;
    if (bracket < 0) return false;
  }
  return bracket === 0;
}
