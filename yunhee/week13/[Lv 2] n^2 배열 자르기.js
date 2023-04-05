function solution(n, left, right) {
    // 행렬을 좌표로 봤을 때, (x, y) 좌표값 중 큰 값이 해당 좌표의 값이 됨
    // (0, 1) => 1 / (1, 2) => 2 / (3, 1) => 3
    const arr = [];
    
    // left부터 right 사이의 좌표 값을 구한 다음, 더 큰 값을 배열에 추가
    for(let i = left; i <= right; i++){
        const x = (i / n) + 1;
        const y = (i % n) + 1;
        
        arr.push(~~Math.max(x, y));
    }
    
    return arr;
}