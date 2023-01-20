function solution(arr, divisor, answer = []) {
  arr.forEach((el) => {
    if (el % divisor === 0) answer.push(el);
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
