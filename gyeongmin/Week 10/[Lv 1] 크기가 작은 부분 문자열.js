function solution(t, p, answer = 0) {
  let len = p.length;
  for (let start = 0; start <= t.length - len; start++) {
    let sliceString = t.slice(start, start + len);
    if (+sliceString <= +p) answer++;
  }
  return answer;
}
