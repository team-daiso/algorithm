function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const newNum = n.toString(k);
  return newNum
    .split("0")
    .map((a) => +a)
    .filter((b) => isPrime(b)).length;
}
