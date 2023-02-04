function solution(s) {
    // s의 길이가 4 혹은 6인지 확인
    if(!(s.length === 4 || s.length === 6)) return false;
    // s에 e가 들어갔는지 확인
    else if(s.includes("e") || s.includes("E")) return false;
    
    // 숫자로 구성되어 있는지 확인
    return Number.isInteger(+s);
}