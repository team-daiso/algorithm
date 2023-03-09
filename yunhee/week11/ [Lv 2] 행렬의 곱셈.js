function solution(arr1, arr2) {
    // arr1에 arr2를 곱한 결과를 반환
    const answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        const arr = [];
        
        for(let j = 0; j < arr2[0].length; j++){
            let sum = 0;
            
            for(let k = 0; k < arr1[0].length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            
            arr.push(sum);
        }
        
        answer.push(arr);
    }
    
    return answer;
}