function solution(n, m) {
  const gcd = greatestCommonDivisor(n, m);
  return [gcd, (n * m) / gcd];
}

const greatestCommonDivisor = (a, b) => {
  return b === 0 ? a : greatestCommonDivisor(b, a % b);
};

/// 2번 풀이
function solution(a, b) {
  let r;
  let ab;
  for (ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
