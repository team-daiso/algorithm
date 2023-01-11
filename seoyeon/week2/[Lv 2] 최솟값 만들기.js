function solution(A,B){
    //큰값 * 작은값 의 합이여야 최솟값이 나옴
    let newA = A.sort((a,b) => a - b);
    let newB = B.sort((a,b) => b - a);
    let result = 0;
    for(let i = 0; i < A.length; i++){
        result += newA[i] * newB[i]
    }
    return result;
}