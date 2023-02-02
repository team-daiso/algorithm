function solution(n) {
    let oneLen = [...(n).toString(2)].filter(v => v === '1').length
    let bigN = 0;
    
    while(oneLen != bigN){
        n++;
        bigN = [...(n).toString(2)].filter(v => v === '1').length
    }
    
    return n;
}
// 처음 시도 했을때 while문에 조건식을 넣어줘 놓고...
// while 안에 if문으로 oneLen === bigN 일때 break 되도록 코드를 한것...ㄷ .. while문 자체가 조건식이 false될때 멈추는 문인데... 