function solution(s) {
    let result = s.split(' ');
    
    for(let i = 0; i < result.length; i++){
        result[i] = [...result[i]].map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase() ).join('')
    }
    
    return result.join(' ');
}