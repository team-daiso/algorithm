function solution(n, a, b) {
  for (let round = 1; Math.pow(2, round) <= n; round++) {
    if (Math.max(a, b) % 2 === 0 && Math.abs(a - b) === 1) {
      return round;
    }

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
}
