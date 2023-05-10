function solution(s, skip, index) {
  let answer = "";

  // skip문자를 제거한 배열
  const alp = [
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
  ].filter((a) => !skip.includes(a));

  for (let el of s) {
    const idx = alp.indexOf(el) + index;
    answer += alp[idx % alp.length];
  }
  return answer;
}
