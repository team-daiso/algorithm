function solution(a, b, n) {
    // 마트에 주어야 하는 병 수 a, a를 가져다 주면 마트가 주는 콜라 개수 b
    let cola = 0; // 마트에서 교환한 콜라 개수
    
    // 가지고 있는 병 수가 마트에 줘야하는 병 수보다 클 경우 반복
    while(n >= a) {
        // 마트에 가져가고 남은 병 수
        const left = n % a;
        // 마트에서 교환해온 병 수
        const exchange = Math.floor(n / a) * b;
        
        // 현재 병 수는 마트에 가져가고 남은 병 수와 마트에서 교환해 온 병 수의 합
        n = left + exchange;
        // 마트에서 교환해온 콜라 개수 누적
        cola += exchange;
    }
    
    return cola;
}