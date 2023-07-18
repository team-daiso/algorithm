function solution(msg) {
  let result = [];
  let dic = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let wc = "";
  for (let i = 0; i < msg.length; i++) {
    wc += msg[i];
    if (!dic.includes(wc)) {
      const w = wc.slice(0, -1);
      result.push(dic.indexOf(w) + 1);
      dic.push(wc);
      wc = msg[i];
    }
  }
  //마지막으로 남는 단어
  if (wc) result.push(dic.indexOf(wc) + 1);
  return result;
}
