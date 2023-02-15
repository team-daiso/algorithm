function solution(n) {
  var answer = 0;
  return Number.parseInt([...n.toString(3)].reverse().join(''), 3)
}