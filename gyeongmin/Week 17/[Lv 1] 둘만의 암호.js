function solution(s, skip, index) {
  let answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const filter = [...alphabet].filter((el) => !skip.includes(el));
  const len = filter.length;
  for (let str of s) {
    let idx = filter.indexOf(str) + index;
    idx = idx >= len ? idx % len : idx;
    answer += filter[idx];
  }
  return answer;
}
