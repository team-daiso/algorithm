function solution(s) {
  let result = [];

  [...s].map((char, i) => {
    const idx = s.slice(0, i).lastIndexOf(char);
    result[i] = idx === -1 ? -1 : i - idx;
  });

  return result;
}
