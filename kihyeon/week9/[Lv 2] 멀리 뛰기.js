function solution(n) {
  let prev = 1;
  let curr = 1;
  let next = 0;

  for (let i = 2; i <= n; i++) {
    next = (prev + curr) % 1234567;
    prev = curr;
    curr = next;
  }

  return curr;
}
