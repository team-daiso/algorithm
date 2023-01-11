function solution(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
}
