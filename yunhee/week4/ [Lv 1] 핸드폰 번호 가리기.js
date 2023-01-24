function solution(num) {
    const leng = num.length;
    
    return `${"*".repeat(leng - 4)}${num.substr(leng - 4)}`
}