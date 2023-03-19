function solution(k, m, score) {
    // 내림차순으로 정렬하여, 앞에서 부터 m개씩 잘라서 최소점수를 구해서 더해준다. (단, 잘른 길이가 m과 같아야한다)
    score.sort((a,b) => b - a);
    
    let result = 0;
    for(let i = 0; i < score.length; i += m){
        let box = score.slice(i, i + m);
        let min = Math.min(...box);
        if(box.length === m){
            result += min * m;
        }
    }
    
    return result;
}