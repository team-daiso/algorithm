// 행렬의 곱셉 조건
// 1. 곱하기 기호 앞의 행렬의 열의 개수 = 곱하기 기호 뒤에있는 행렬의 행의 갯수 일때만 곱셈 가능하다.
// 2. 곱하기 기호 앞에 있는 행렬의 제i행과 곱하기 기호 뒤에 있는 행렬의 제j열의 성분을 차례대로 곱하여 더한값이 (i.j) 성분
// 문제 조건에 곱할 수 있는 배열만 주어진다고 함.

function solution(arr1, arr2) {
    const newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        let result = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let elem = 0;
            for(let k = 0; k < arr2.length; k++) { // arr1[0].length도 가능.
                elem += arr1[i][k] * arr2[k][j];
            }
            result.push(elem);
        }
        newArr.push(result);
    }
    return newArr;
}

// i = arr1.length
// j =arr2[0].length
// k = arr1[0].length || arr2.length (result의 한 칸의 값을 구하기 위해 실제 반복해야하는 수)