function solution(num) {
  let answer = 0;

  while (num !== 1 && answer !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num === 1 ? answer : -1;
}
