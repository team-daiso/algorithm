function solution(people, limit) {
    let count = 0;
    
    // 몸무게 오름차순으로 정렬
    people.sort((a, b) => a - b);
    
    while(people.length > 0){
        // 몸무게가 가장 많이 나가는 사람을 꺼냄
        const human = people.pop();
        
        // 맨 앞사람(몸무게가 가장 적게 나가는 사람)과 많이 나가는 사람의 합이 무게 제한보다 작거나 같으면 맨 앞사람도 꺼냄
        if(people[0] + human <= limit) people.shift();
        
        // 반복할 때마다 구명보트를 사용하므로 count에 1을 더함
        count++;
    }
    
    return count;
}