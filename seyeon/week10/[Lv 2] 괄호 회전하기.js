function solution(s) {
  let count = 0;
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  outer: for (let i = 0; i < s.length; i++) {
    const open = [];

    for (let bracket of s) {
      // 여는 괄호일 때
      if (pairs[bracket]) {
        open.push(bracket);
        // open의 마지막 요소와 페어일 때
      } else if (pairs[open[open.length - 1]] === bracket) {
        open.pop();
        // 마지막 요소와 페어가 아닐 때
      } else {
        s = `${s.slice(1)}${s[0]}`; // 다음 회전을 탐색
        continue outer;
      }
    }

    if (open.length === 0) count++;
    s = `${s.slice(1)}${s[0]}`;
  }

  return count;
}
