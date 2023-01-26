function solution(arr, divisor) {
  let answer = arr.filter((el) => el % divisor === 0);
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}
