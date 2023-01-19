function solution(s) {
  let result = 0;

  let ss = s.toLowerCase();

  for (let i = 0; i < ss.length; i++) {
    if (ss[i] === "p") result += 1;
    else if (ss[i] === "y") result -= 1;
  }

  return result === 0 ? true : false;
}