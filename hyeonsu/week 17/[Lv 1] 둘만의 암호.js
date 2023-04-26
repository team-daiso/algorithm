function solution(s, skip, index) {
  // s와 skip은 문자열
  // index는 자연수

  // s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿈
  // index의 알파벳이 z를 넘어가면 다시 a로 돌아감
  // skip의 알파멧은 건너 뜀

  skip = [...skip];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter(el => !skip.includes(el));
  let answer = "";
  const len = alphabet.length;
  for (let el of s) {
    const idx = alphabet.indexOf(el) + index;
    answer += idx > len - 1 ? alphabet[idx % len] : alphabet[idx];
  }
  return answer;
}
