function solution(s) {
    const regex = /\}\,/g;
    
    const set = new Set();
    const tuple = s.slice(2, s.length - 2)
                   .replaceAll(regex, "")
                   .split("{")
                   .sort((a, b) => a.length - b.length)
                   .map(numbers => numbers.split(","));
    
    for(let num of tuple){
        num.forEach(e => set.add(+e));
    }
    
    return [...set];
}