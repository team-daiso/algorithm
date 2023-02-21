function solution(n) {
  return Number.parseInt([...n.toString(3)].reverse().join(''), 3)
}