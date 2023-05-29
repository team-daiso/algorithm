function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  let primeCount = 0;

  n.toString(k)
    .split("0")
    .forEach((number) => isPrime(+number) && primeCount++);

  return primeCount;
}
