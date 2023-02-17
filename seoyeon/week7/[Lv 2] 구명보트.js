function solution(people, limit) {
    people.sort((a,b) => b - a);
    let i = 0;
    let j = people.length-1;
    let count = 0;
    
    while(i <= j){
        if(people[i] + people[j] <= limit){
            i++;
            j--;
        }else{
            i++
        }
        count++;
    }

    return count;
}