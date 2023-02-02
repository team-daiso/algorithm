function solution(s) {
    // 알파벳이 2개 붙어있는 짝 찾아서 제거하기
    const stack = [];
    
    for(let char of s){
        if(stack[stack.length-1] === char) stack.pop();
        else stack.push(char);
    }
    
    return stack.length ? 0 : 1;
}