function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    
    for(let el of goal){
        if(el === cards1[idx1]) idx1++;
        else if(el === cards2[idx2]) idx2++;
        else return "No";
    }
    return "Yes";
}