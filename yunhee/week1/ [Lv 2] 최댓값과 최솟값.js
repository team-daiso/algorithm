function solution(s) {
    const arr = s.split(" ").map(Number).sort((a,b) => a - b);
    
    return `${arr[0]} ${arr[arr.length-1]}`
}

// 💡 Math.min(...arr), Math.max(...arr) 문자열도 취급