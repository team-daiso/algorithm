function solution(progresses, speeds) {
    // 작업 일수
let days = progresses.map((v,idx) => {
    let day = 0;
    while(v < 100){
        v += speeds[idx];
        day++;
    }
    return day;
})

let result = []
let max = days[0];
let count = 1;  
for(let i = 1; i <= days.length; i++){. // 조건식이 < 가 아닌 '<=' 인 이유는, days의 길이까지만 for문이 돌면 마지막 count를 result에 push가 되지 않아서
    if(max >= days[i]){
        count++;
    }else{
        result.push(count);
        max = days[i];
        count = 1;
    }
}

return result;
}