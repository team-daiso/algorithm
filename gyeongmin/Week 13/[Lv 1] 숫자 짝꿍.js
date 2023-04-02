function solution(X, Y) {
  if ([...X].filter((el) => Y.includes(el)).length === 0) return "-1";
  let answer = "";
  for (let i = 0; i <= 9; i++) {
    let XNum = [...X].filter((el) => +el === i).length;
    let YNum = [...Y].filter((el) => +el === i).length;
    answer += i.toString().repeat(Math.min(XNum, YNum));
  }
  if (answer.match(/[^0]/g) === null) return "0";
  else {
    return [...answer].sort((a, b) => b - a).join("");
  }
}
