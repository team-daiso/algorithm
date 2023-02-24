function solution(sizes) {
  sizes.map((size) => size.sort((a, b) => b - a));

  const width = Math.max(...sizes.map((size) => size[0]));
  const height = Math.max(...sizes.map((size) => size[1]));

  return width * height;
}
