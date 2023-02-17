function solution(arr) {
  return arr.filter((num, idx) => arr[idx - 1] !== num);
}
