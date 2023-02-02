function solution(s) {
  //s의 길이가 홀수이면 ceil(s길이/2) 반환
  return s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : //s의 길이가 짝수이면 s길이/2, s길이/2 + 1 반환
      `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}
