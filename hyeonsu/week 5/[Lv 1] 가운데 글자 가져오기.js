function solution(s) {
  // 홀수면 가운데 글자
  // 짝수면 가운데 두글자
  return s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : s[(s.length / 2 - 1)] + s[(s.length / 2)];
}