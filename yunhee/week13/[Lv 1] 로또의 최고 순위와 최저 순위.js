function getRank(score) {
    const rank = [6, 5, 4, 3, 2];
    const index = rank.indexOf(score)
    
    return index > -1 ? index + 1 : 6;
}

function solution(lottos, win_nums) {
    // 당첨 가능한 최고 순위와 최저 순위를 배열에 담아 반환
    let zeroCnt = 0;
    let correctCnt = 0;
    
    lottos.forEach(lotto => {
        // 로또 번호가 0이라면 
        if(lotto <= 0) zeroCnt++;
        // 구매한 로또 번호와 당첨 번호가 일치한다면
        else if(win_nums.indexOf(lotto) > -1) correctCnt++;
    });

    return [getRank(correctCnt), getRank(correctCnt + zeroCnt)].sort((a, b) => a - b);
}