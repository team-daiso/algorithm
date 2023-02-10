function solution(s) {
    let trans = [...s].map((_, idx)=> s.charCodeAt(idx))
    return trans.sort((a, b) => b - a).map(v => String.fromCharCode(v)).join('');
}