function isCorrectBracket(s) {
    while(s.includes("()") || s.includes("[]") || s.includes("{}")) {
        if(s.includes("()")) s = s.replace("()", "");
        if(s.includes("[]")) s = s.replace("[]", "");
        if(s.includes("{}")) s = s.replace("{}", "");
    }
    
    return s.length <= 0;
}

function solution(s) {
    let x = 0;
    
    for(let i = 0; i < s.length; i++){
        // 올바른 괄호라면 x 증가
        if(isCorrectBracket(s)) x++;

        // 왼쪽으로 1칸 회전
        s = s.slice(1) + s[0];        
    }
    
    return x;
}