function solution(dartResult) {
  // dartResult는 문자열
  // 다트는 총 세차례 던짐
  const regex = /(\d+[A-Z]+[#*]?)/g;
  const results = dartResult.match(regex);
  const scores = [];
  let answer = 0;

  results.map(el => {
    el = [...el];
    let score = 0;
    switch (el.length) {
      case 2:
        score += +el[0];
        break;
      case 3:
        if (el[1] === "0") {
          score += +(el[0] + el[1]);
          el.shift();
        } else {
          score += +el[0];
        }
        break;
      case 4:
        score += +(el[0] + el[1]);
        el.shift();
    }
    el.shift();
    switch (el[0]) {
      case "S":
        score = score ** 1;
        break;
      case "D":
        score = score ** 2;
        break;
      case "T":
        score = score ** 3;
    }
    el.shift();
    switch (el[0]) {
      case "*":
        score = score * 2;
        scores[scores.length - 1] = scores[scores.length - 1] * 2;
        break;
      case "#":
        score = score * -1;
        break;
    }
    scores.push(score);
  });

  return scores.reduce((pre, acc) => pre + acc, 0);
}
