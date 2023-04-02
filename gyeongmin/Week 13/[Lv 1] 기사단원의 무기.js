function solution(number, limit, power) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    let prime = 1;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) prime++;
    }
    answer += prime <= limit ? prime : power;
    prime = 0;
  }
  return answer;
}
