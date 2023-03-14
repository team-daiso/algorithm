function solution(N, stages) {
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 리턴
    // => 스테이지마다 실패율 구하기
    
    const failRates = [];
    
    for(let i = 1; i <= N; i++){
        let arrivalPlayer = 0, failPlayer = 0;
        
        stages.forEach(stage => {
            if(stage >= i) arrivalPlayer++;
            if(stage === i) failPlayer++;
        })
        
        // 스테이지 번호-실패율(스테이지에 도달했으나 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수)
        failRates.push(`${i}-${failPlayer / arrivalPlayer}`);
    }
    
    return failRates.sort((a, b) => b.split("-")[1] - a.split("-")[1])
                    .map(failRate => +failRate.split("-")[0]);
}