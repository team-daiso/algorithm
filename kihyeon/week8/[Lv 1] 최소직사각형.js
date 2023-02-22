function solution(sizes) {
  const maxWidth = Math.max(...sizes.map((card) => Math.max(...card)));
  const maxHeight = Math.max(...sizes.map((card) => Math.min(...card)));
  return maxWidth * maxHeight;
}
