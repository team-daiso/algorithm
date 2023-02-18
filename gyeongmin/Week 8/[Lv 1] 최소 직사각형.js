function solution(sizes) {
  sizes.forEach((el) => {
    el.sort((a, b) => a - b);
  });
  let w = sizes.map((el) => el[0]);
  let h = sizes.map((el) => el[1]);
  return Math.max(...w) * Math.max(...h);
}
