function solution(num) {
    const leng = num.length - 4;
    
    return `${"*".repeat(leng)}${num.substr(leng)}`
}