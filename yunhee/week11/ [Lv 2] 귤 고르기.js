function solution(k, tangerine) {
    // 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화
    let tangerineBySize = {}; // 귤 크기 별로 key에 개수를 누적할 객체
    let count = 0; // 서로 다른 종류가 몇개인지 담을 변수
    
    // 귤 크기 key에 귤 개수를 누적한다.
    for(let tang of tangerine){
        if(!(tang in tangerineBySize)) {
            tangerineBySize[tang] = 0;
        }
        
        tangerineBySize[tang]++;
    }
    
    // 귤의 크기 별 개수(=객체의 값)을 모아 배열로 만든 후 개수가 많은 순으로 정렬
    tangerineBySize = Object.values(tangerineBySize).sort((a, b) => b - a);
    
    // 개수가 많은 순으로 k에서 빼주면서 종류 카운트
    for(let tang of tangerineBySize){
        if(k <= 0) break;
        
        k -= tang;
        count++;
    }
    
    return count;
}