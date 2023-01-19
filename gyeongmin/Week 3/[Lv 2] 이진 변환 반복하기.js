function solution(s) {
  let answer = [0, 0];
  let copyS = s;

  while (s.length !== 1) {
    copyS = s
      .split("")
      .filter((x) => x === "1")
      .join("");
    let copyLen = copyS.length;
    answer[1] += s.length - copyLen;
    answer[0]++;
    s = copyLen.toString(2);
  }
  return answer;
}
