function solution(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (stack[stack.length - 1] === current) {
            stack.pop();
        } else {
            stack.push(current);
        }
    }
    return stack.length === 0 ? 1 : 0;
}