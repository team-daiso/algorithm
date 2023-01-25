function solution(arr) {
    // 배열의 길이가 1인 경우 -1 리턴
    if(arr.length <= 1) return [-1];
    
    // 배열의 최솟값 구하기
    const min = Math.min(...arr);
    
    // 최솟값의 인덱스 찾고 제거하기
    arr.splice(arr.indexOf(min, 1), 1);
               
    return arr;
}