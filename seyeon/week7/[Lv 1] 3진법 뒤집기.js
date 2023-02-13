function solution(n) {
  const reverse = [...n.toString(3)].reverse().join('');
  return parseInt(reverse, 3);
}
