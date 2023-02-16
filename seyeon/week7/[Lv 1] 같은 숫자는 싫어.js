function solution(arr) {
  return arr.filter((num, i) => num !== arr[i - 1]);
}
