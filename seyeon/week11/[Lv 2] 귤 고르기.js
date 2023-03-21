function solution(k, tangerine) {
  const categorizing = {};

  tangerine.map((size) => (categorizing[size] ? categorizing[size]++ : (categorizing[size] = 1)));

  const sizes = Object.values(categorizing).sort((a, b) => b - a);

  for (let i = 0; i < sizes.length; i++) {
    k -= sizes[i];
    if (k <= 0) return i + 1;
  }
}
