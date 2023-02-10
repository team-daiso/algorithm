function solution(arr) {
    const stack = [];
    
    while(arr.length > 0){
        const number = arr.pop();
        
        if(stack[stack.length-1] !== number) stack.push(number);
    }
    
    return stack.reverse();
}