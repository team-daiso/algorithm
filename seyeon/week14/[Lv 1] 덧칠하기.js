function solution(n, m, section) {
  let painted = 0;
  let count = 0;

  for (let num of section) {
    if (num < painted) continue;
    painted = num + m;
    count++;
  }

  return count;
}
