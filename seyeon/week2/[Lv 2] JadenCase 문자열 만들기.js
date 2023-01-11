function solution(s) {
  let result = '';
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }

  return result;
}
