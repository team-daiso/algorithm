function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    //s의 i번째 수랑 stack의 마지막이랑 같으면 pop 아니면 push
    if (s[i] !== stack[stack.length - 1]) stack.push(s[i]);
    else stack.pop();
  }
  return stack.length ? 0 : 1;
}
