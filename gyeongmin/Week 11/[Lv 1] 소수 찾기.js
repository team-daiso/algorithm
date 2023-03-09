function solution(n) {
  function checkPrime(target) {
    if (target % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(target); i += 2) {
      if (target % i === 0) return false;
    }
    return true;
  }
  let answer = 1; //2는 먼저 담아두기
  for (let i = 3; i <= n; i += 2) {
    if (checkPrime(i)) answer++;
  }
  return answer;
}
