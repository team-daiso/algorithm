function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let plus = numbers[i] + numbers[j]
            if(!answer.includes(plus)){
                answer.push(plus);
            }  
        }
    }
    return answer.sort((a,b) => a-b);
}