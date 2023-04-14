function solution(babbling) {
    let word = ['aya', 'ye', 'woo', 'ma']
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < word.length; j++){
            if(babble.includes(word[j].repeat(2))){
                break;
            }
            
            babble = babble.split(word[j]).join(" "); // 그냥 join("")을 해버리면, 단어가 재조합되면서 새로운 조건이 발생할 수도 있다.
        }
        
        if(babble.split(" ").join("").length === 0){
            count += 1;
        }
    }
    
    return count;
}