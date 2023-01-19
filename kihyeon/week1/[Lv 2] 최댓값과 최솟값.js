function solution(s) {
  const arr = s.split(" ").sort((a, b) => a - b);
  return arr[0].concat(" ", arr[arr.length - 1]);
}
