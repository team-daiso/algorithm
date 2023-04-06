function solution(n, lost, reserve) {
  let arr = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    arr[reserve[i] - 1] += 1;
    arr[lost[i] - 1] -= 1;
  }

  for (let i = 0; i < n; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === 2) {
      arr[i] = 1;
      arr[i - 1] = 1;
    }
  }
  return arr.filter((el) => el !== 0).length;
}
