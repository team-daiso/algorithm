function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length < 1 ? [-1] : arr;
}
