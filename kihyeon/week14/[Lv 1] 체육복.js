function solution(n, lost, reserve) {
  let clothes = new Array(n).fill(1);
  for (const student of reserve) clothes[student - 1]++;
  for (const student of lost) clothes[student - 1]--;

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0) {
      if (i > 0 && clothes[i - 1] === 2) {
        clothes[i - 1]--;
        clothes[i]++;
      } else if (i < n - 1 && clothes[i + 1] === 2) {
        clothes[i + 1]--;
        clothes[i]++;
      }
    }
  }

  return clothes.filter((s) => s > 0).length;
}
