function solution(d, budget) {
    // 최대한 많은 부서의 물품을 구매하도록
    // 물품을 구매해줄 때는 각 부서가 신청한 금액만큼 모두 지원해줘야 함
    let count = 0;
    
    d.sort((a, b) => a - b).forEach((cost) => {
        if(budget - cost >= 0){
            budget -= cost;
            count++;
        }
    });
    
    return count;
}