function solution(s) {
    let newS = s.split(' ').map(el => Number(el)).sort((a,b) =>  a-b)
    return `${newS[0]} ${newS[newS.length-1]}`;
}