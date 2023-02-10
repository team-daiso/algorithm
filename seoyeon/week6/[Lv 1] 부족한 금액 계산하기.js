function solution(price, money, count) {
    let acc = 0;
    
    for(let i = 1; i <= count; i++ ){
        acc += price * i
    }

    return money >= acc ? 0 : acc - money;
}