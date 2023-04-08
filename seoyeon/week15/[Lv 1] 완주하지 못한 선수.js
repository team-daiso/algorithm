function solution(participant, completion) {
    let hash = {};
    
    participant.forEach(el => hash[el] = ++hash[el] || 1);
    completion.forEach(el => hash[el]--);
    // 여기까지 돌면 hash에서 완주 못한 선수의 값은 1이 됨

    for(let key in hash){
        if(hash[key]) return key;
    }
}