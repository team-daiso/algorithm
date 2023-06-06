function solution(n, t, m, p) {
  let result = "";
  let str = "0";
  for (let i = 1; i < t * m; i++) {
    str += i.toString(n).toUpperCase();
  }
  for (let j = p - 1; j < m * t; j += m) {
    result += str[j];
  }
  return result;
}
