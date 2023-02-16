function solution(n, m, Least = 1) {
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) Least = i;
  }
  return [Least, (n * m) / Least];
}
