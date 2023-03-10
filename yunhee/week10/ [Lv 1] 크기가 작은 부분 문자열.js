function solution(t, p) {
    let count = 0; // 부분 문자열이 p보다 작거나 같은 경우
    const length = p.length; // p의 길이
    
    for(let i = 0; i < t.length; i++){
        const end = i + length - 1;
        
        // 부분 문자열을 만들 때 t의 길이를 넘으면 반복문 탈출
        if(end >= t.length) break;
        
        // 아니면 부분 문자열 생성하고 p와 비교 
        if(+t.slice(i, end + 1) <= +p) count++;
    }
    
    return count;
}