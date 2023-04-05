function solution(number, limit, power) {
    // 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기 구매
    // 무기의 공격력 당 1kg의 철 필요할 때, 무기를 모두 만들기 위해 필요한 철의 무게는?
    let powers = 1;
    
    for(let i = 2; i <= number; i++){
        const sqrt = Math.sqrt(i);
        let divisor = 0;
        
        // 제곱근까지 약수를 구하면 나머지 약수는 구한 약수에 대칭되므로 제곱근까지 약수를 구함
        for(let j = 1; j <= sqrt; j++){
            if(i % j === 0) divisor++;
        }
        
        // 만약 제곱근이라면 주어진 숫자가 4라고 했을 때, 2 * 2는 중복되므로 중복된 경우를 제거
        divisor = Number.isInteger(sqrt) ? (divisor * 2) - 1: (divisor * 2);
        
        // 공격력 제한수치보다 큰 무기를 구매해야하면 정해진 공격력을 가진 무기 구매
        powers += divisor > limit ? power : divisor;
    }
    
    return powers
}