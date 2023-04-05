function solution(cards1, cards2, goal) {
    for(let word of goal){
        if(cards1[0] === word) cards1 = cards1.slice(1);
        else if(cards2[0] === word) cards2 = cards2.slice(1);
        else return "No"
    }
    
    return "Yes";
}