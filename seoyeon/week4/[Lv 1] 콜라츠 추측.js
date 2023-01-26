function solution(num) {
    let count = 0;
    while(num != 1){
        num = num % 2 ? num * 3 + 1 : num / 2;
        count += 1;
    }
    return count < 500 ? count : -1;
}