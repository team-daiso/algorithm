function solution(s) {
  // lastIndexOf 사용?
  const answer = [-1];
  if (s.length === 1) return answer;
  const chars = [s[0]];
  [...s].map((char, idx) => {
    if (idx === 0) return;
    if (chars.lastIndexOf(char) === -1) {
      answer.push(-1);
    } else {
      answer.push(chars.length - chars.lastIndexOf(char));
    }
    chars.push(char);
  });
  return answer;
}