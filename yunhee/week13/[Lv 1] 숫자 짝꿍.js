function solution(X, Y) {
    // 공통으로 나타나는 정수들을 이용하여 만들 수 있는 가장 큰 수가 짝꿍
    const pair = [];
    X = [...X];
    Y = [...Y];
    
    for(let i = 0; i < 10; i++){
        const xCnt = X.filter(x => x === `${i}`).length;
        const yCnt = Y.filter(y => y === `${i}`).length;
        
        const count = Math.min(xCnt, yCnt);
        
        for(let j = 0; j < count; j++){
            pair.push(`${i}`);
        }
    }
    
    // 짝꿍이 존재하지 않으면 -1, 0으로만 구성되어 있다면 0
    if(pair.length <= 0) return "-1";
    else if(+pair.join("") <= 0) return "0";
    
    return pair.sort((a, b) => b - a).join("");
}