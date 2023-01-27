function solution(n, str = "") {
  for (let i = 0; i < n; i++) {
    str += i % 2 !== 0 ? "박" : "수";
  }
  return str;
}
