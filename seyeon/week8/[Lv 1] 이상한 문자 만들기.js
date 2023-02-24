function solution(s) {
  const result = s
    .toUpperCase()
    .split(' ')
    .map((word) => [...word].map((char, i) => (i % 2 ? char.toLowerCase() : char)).join(''))
    .join(' ');

  return result;
}
