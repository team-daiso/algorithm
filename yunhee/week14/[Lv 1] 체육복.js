function solution(n, lost, reserve) {
    // 바로 앞번호나 뒷번호의 학생에게만 체육복을 빌려줄 수 있다.
    // 체육수업을 들을 수 있는 학생의 최댓값을 반환
    const losts = [];
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for(let i = 0; i < lost.length; i++){
        const duplNum = reserve.indexOf(lost[i]);
        
        if(duplNum > -1) {
            lost.splice(i, 1);
            reserve.splice(duplNum, 1);
            i--;
        }
    }
    
    while(lost.length > 0){
        const number = lost.shift();
        
        const prev = reserve.indexOf(number - 1); 
        const next = reserve.indexOf(number + 1); 
        
        if(prev > -1) reserve.splice(prev, 1);
        else if(next > -1) reserve.splice(next, 1);
        else losts.push(number);
    }
    
    return n - losts.length;
}