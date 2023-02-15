function solution(n) {
  let ternary = n.toString(3).split("").reverse().join("");
  return parseInt(ternary, 3);
}
