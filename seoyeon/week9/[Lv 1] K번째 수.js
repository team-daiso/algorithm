function solution(array, commands) {
    let result = [];
    
    for(let el of commands){
        let i = el[0]-1;
        let j = el[1];
        let k = el[2]-1;
        let newArr = array.slice(i, j).sort((a,b) => a-b);
        result.push(newArr[k]);
    }
    
    return result;
}