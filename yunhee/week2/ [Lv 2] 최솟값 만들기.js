function solution(A,B){
    A = A.sort((a,b) => a - b);
    B = B.sort((a,b) => b - a);
    
    return A.map((num, idx) => num * B[idx])
    .reduce((acc, cur) => acc + cur);
}