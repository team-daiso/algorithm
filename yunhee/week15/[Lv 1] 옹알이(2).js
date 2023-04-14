function solution(babblings) {
    const regex1 = /(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/g;
    const regex2 = /(aya|ye|woo|ma)/g;
    
    let count = 0;
    
    for(let babbling of babblings){
        if(babbling.match(regex1)) continue;
        if(babbling.replace(regex2, "").length <= 0) count++;
    }
    
    return count;
}