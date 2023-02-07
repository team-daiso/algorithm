function solution(s) {
    let sLen = s.length
    if(sLen === 4 || sLen === 6) return s.replace(/[0-9]/g, '').length === 0;
    else return false;
}