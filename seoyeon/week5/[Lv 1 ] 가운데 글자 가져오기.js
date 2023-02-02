function solution(s) {
    let sLen = s.length 
    return sLen % 2 ? s.slice(parseInt(sLen/2), parseInt(sLen/2)+1) : s.slice((sLen/2)-1, (sLen/2)+1) ;
}