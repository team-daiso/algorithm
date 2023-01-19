// 첫번째 풀이 - 시간 초과!
function solution(s){    
    // 배열에 올바른 괄호가 없을 때까지 replaceAll로 빈 문자열로 변경
    while(s.includes("()")){
        s = s.replaceAll("()", "");
    }
    
    return s.length === 0;
}

// 두번째 풀이 - 통과
function solution(s){    
    s = [...s];
    const stack = [];
    
    // s의 길이가 홀수인 경우 괄호가 짝지어질 수 없으므로 false
    if(s.length % 2 !== 0) return false;

    for(let char of s){
        // 열린 괄호일 경우 배열에 추가
        if(char === "(") {
            stack.push(char);
        // 닫힌 괄호이면서 배열에 요소가 남아있다면 배열 마지막 요소 제거(배열에는 열린 괄호만 존재)
        }else if(char === ")" && stack.length > 0) {
            stack.pop();
        }
    }
    
    // 배열에 길이가 0이면 모든 괄호가 짝지어진 것이므로 true 반환
    return !stack.length;
}