function solution(s) {
  let result = 0;
  let first = s[0];
  let count = [1, 0];

  for (let i = 1; i <= s.length; i++) {
    first === s[i] ? count[0]++ : count[1]++;

    if (count[0] === count[1] || s.length === i) {
      first = s[i + 1];
      count = [1, 0];
      result++;
      i++;
    }
  }

  return result;
}
