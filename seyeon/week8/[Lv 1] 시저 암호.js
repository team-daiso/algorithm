function solution(s, n) {
  let result = '';
  const alphabets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  };

  for (let char of s) {
    const key = alphabets.lower.includes(char) ? 'lower' : 'upper';
    const idx = alphabets[key].indexOf(char);

    if (char === ' ') {
      result += ' ';
    } else {
      result += alphabets[key][(idx + n) % 26];
    }
  }

  return result;
}
