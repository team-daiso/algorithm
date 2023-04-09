function solution(participant, completion) {
    const participants = {};
    
    for(let i = 0; i < participant.length; i++){
        const part = participant[i];
        participants[part] ? participants[part]++ : participants[part] = 1;
        
        if(i >= completion.length) continue;
        const comp = completion[i];
        
        participants[comp] ? participants[comp]-- : participants[comp] = -1;
    }
    
    for(let parts in participants){
        if(participants[parts] > 0) return parts;
    }
}