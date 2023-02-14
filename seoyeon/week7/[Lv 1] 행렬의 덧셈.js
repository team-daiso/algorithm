function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        let box = [];
        for( let j = 0; j < arr1[i]?.length; j++){
            box.push(arr1[i][j] + arr2[i][j])
        } 
        answer.push(box)
    }
    
    return answer;
}

// 다른 방법!
// function solution(arr1, arr2) {
//     return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j] ));
// }