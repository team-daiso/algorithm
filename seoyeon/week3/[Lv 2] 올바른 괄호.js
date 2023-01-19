function solution(s){
    const stack = [];
    for(let v of s){
        if(v === '('){
            stack.push(v)
        }else{
            if(stack.length === 0){
                return false;
            }
            stack.pop()
        }
    }
    return stack.length === 0;
}

//테스트 케이스 '()())(()' False