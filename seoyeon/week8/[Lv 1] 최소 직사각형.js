function solution(sizes) {
    let answer = [0, 0];
    
    for(el of sizes){
        let big = Math.max(...el);
        let small = Math.min(...el);
        if(answer[0] < big) answer[0] = big;
        if(answer[1] < small) answer[1] = small;
        
    }
    
    return answer[0] * answer[1];
}