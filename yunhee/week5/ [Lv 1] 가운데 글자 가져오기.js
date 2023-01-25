function solution(s) {
    const leng = s.length;
    
    return leng % 2 ? s[Math.floor(leng / 2)] : `${s.substr(leng / 2 - 1, 2)}`;
}