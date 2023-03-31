function solution(n, m, section) {
  let start = section[0];
  let paint = 1;
  for (let i = 1; i < section.length; i++) {
    if (start + m <= section[i]) {
      start = section[i];
      paint++;
    }
  }
  return paint;
}
