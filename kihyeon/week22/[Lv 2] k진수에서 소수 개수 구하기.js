function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let converted = n.toString(k);
  let primes = converted.split("0");

  for (let prime of primes) {
    if (prime !== "" && isPrime(parseInt(prime))) {
      answer++;
    }
  }
  return answer;
}
