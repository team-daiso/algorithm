function solution(d, budget) {
    d.sort((a,b) => a - b);
    let sum = 0; // d[0]으로 하고, count = 1 로 적었었는데, 그렇게 하면 첫번째가 budget보다 큰 경우는 처리하지 못한다! 테스트 3번 불통이였어서 고침~
    let count = 0;
    
    for(let i = 0; i < d.length; i++){
        sum += d[i];
        if(sum <= budget){
            count++
        }else{
            break;
        }
    }
    return count;
}