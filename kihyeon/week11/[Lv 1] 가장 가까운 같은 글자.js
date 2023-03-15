function solution(s) {
  return [...s].map((el, i) => {
    const count = s.slice(0, i).lastIndexOf(el);
    return count === -1 ? count : i - count;
  });
}
