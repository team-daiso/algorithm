function solution(s) {
  const idx = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[idx] : s[idx - 1] + s[idx];
}
