// 첫번째 풀이 - 통과
function solution(s) {
    // s가 1이 될 때까지 이진 변환을 했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 0의 개수
    let changeCnt = 0;
    let zeroCnt = 0;
    
    function repeat(str){
        if(str === "1") return;
        
        str = [...str];
        changeCnt++;
        
        // 제거된 0의 개수 누적
        zeroCnt += str.filter(char => char === "0").length;
        
        // 0을 제거한 문자열의 길이
        let strLeng = str.filter(char => char !== "0").length;
        
        // 문자열의 길이를 2진법으로 표현한 문자열
        let newStr = strLeng.toString(2);
        
        return repeat(newStr);
    }
    
    repeat(s);
    
    return [changeCnt, zeroCnt]; 
}

// 두번째 풀이 - 통과(더 빠름)
function solution(s) {
    // s가 1이 될 때까지 이진 변환을 했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 0의 개수
    let changeCnt = 0;
    let zeroCnt = 0;
    
    function repeat(str){
        if(str === "1") return;

        changeCnt++;
        let removedZero = [...str].filter(char => char !== "0");
        
        // 제거된 0의 개수 누적
        zeroCnt += str.length - removedZero.length;
        
        // 0을 제거한 문자열의 길이를 2진법으로 표현한 문자열
        let newStr = removedZero.length.toString(2);
        
        return repeat(newStr);
    }
    
    repeat(s);
    
    return [changeCnt, zeroCnt]; 
}