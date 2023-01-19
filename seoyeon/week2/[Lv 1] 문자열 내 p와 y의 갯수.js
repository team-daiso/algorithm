function solution(s){
    let p = [...s.toLowerCase()].filter(v => v === 'p');
    let y = [...s.toLowerCase()].filter(v => v === 'y');
    
    return p.length === y.length ? true : false;
}