function solution(s) {
  return [...s].map((char, i) => {
    const idx = s.slice(0, i).lastIndexOf(char);
    return idx === -1 ? idx : i - idx;
  });
}
