function solution(s) {
  //s의 길이가 홀수일 때, return
  if (s.length % 2 !== 0) return 0;

  const bracket = { "(": ")", "[": "]", "{": "}" };
  const bracketLeft = Object.keys(bracket);

  return [...s].reduce((ac, v, i) => {
    const curStr = s.slice(i) + s.slice(0, i);
    const stack = [];
    for (const curChar of curStr) {
      if (bracketLeft.includes(curChar)) stack.push(curChar);
      else if (bracket[stack.pop()] !== curChar) {
        return ac;
      }
    }
    return stack.length === 0 ? ++ac : ac;
  }, 0);
}
