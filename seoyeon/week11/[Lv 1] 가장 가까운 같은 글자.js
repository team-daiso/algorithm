function solution(s) {
    let memory = [];
    let result = [];
    
    for(let i = 0; i < s.length; i++){
        if(memory.includes(s[i])){
            let existIdx = memory.lastIndexOf(s[i]);
            result[i] = i - existIdx;
        }else{
            result[i] = -1;
        }
        memory[i] = s[i]; 
    }
    
    return result;
}