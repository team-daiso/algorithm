function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = "";
    let word = ""; // 영단어일 경우 알파벳을 합치는 용도
    
    // 주어진 문자에서 변경할 숫자가 없는 경우 미리 리턴
    if(Number.isInteger(+s)) return +s;
    
    for(let i = 0; i < s.length; i++){
        // 숫자라면 문자열에 더하기
        if(Number.isInteger(+s[i])) answer += s[i];
        // 문자라면 숫자로 바꿔주기
        else {
            // 문자열에 i번째 문자를 더해줌
            word += s[i];
            
            // 현재 word가 numbers 배열에 있다면 영단어가 완성됐으므로 answer에 인덱스(=숫자) 추가, word 초기화
            const index = numbers.indexOf(word);
            
            if(index >= 0){
                answer += index;
                word = "";
            }
        }
    }
    
    return +answer;
}