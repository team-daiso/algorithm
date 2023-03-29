const solution = (n, left, right) => {
  let answer = [];
  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n);
    const coloumn = i % n;
    answer.push(Math.max(row, coloumn) + 1);
  }
  return answer;
};
