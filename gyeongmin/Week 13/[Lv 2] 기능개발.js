function solution(progresses, speeds) {
  var answer = [];
  let rest = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));

  let func = 1;
  let day = rest[0];

  for (let i = 1; i < progresses.length; i++) {
    if (rest[i] <= day) {
      func++;
    } else {
      day = rest[i];
      answer.push(func);
      func = 1;
    }
  }
  answer.push(func);
  return answer;
}
