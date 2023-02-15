function solution(n, m) {
  const gcd = greatestCommonDivisor(n, m);
  return [gcd, (n * m) / gcd];
}

const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  else return greatestCommonDivisor(b, a % b);
};

/// 2번 풀이
function solution(a, b) {
  let r;
  let ab;
  for (ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
