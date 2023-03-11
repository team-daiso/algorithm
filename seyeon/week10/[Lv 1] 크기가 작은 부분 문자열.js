function solution(t, p) {
  let count = 0;

  for (let i = 0; i + p.length < t.length; i++) {
    if (t.slice(i, i + p.length) <= p) {
      count++;
    }
  }

  return count;
}
