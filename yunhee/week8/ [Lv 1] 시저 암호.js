function solution(s, n) {
    return [...s].map((str) => {
        if(str === " ") return str;
            
        let sum = str.charCodeAt() + n;
        
        // 대문자인 경우
        if(str >= "A" && str <= "Z") {
            sum = sum > 90 ? (sum - "Z".charCodeAt()) + 64 : sum;
        }
        // 소문자인 경우
        else if(str >= "a" && str <= "z") {
            sum = sum > 122 ? (sum - "z".charCodeAt()) + 96 : sum;
        }
        
        return String.fromCharCode(sum);
    }).join("");
}