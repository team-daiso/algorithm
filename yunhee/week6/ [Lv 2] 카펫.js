function solution(brown, yellow) {
    // 갈색과 노란색 카펫의 합이 가로 * 세로 사이즈와 같음
    const size = brown + yellow;
    // size의 약수를 저장할 배열
    const divisor = [];
    
    // 사이즈의 약수 찾기
    for(let i = 3; i < size; i++){
        if(size % i === 0) divisor.push(i);
    }
    
    // 약수의 곱이 사이즈이고 (넓이 - 2) * (높이 - 2)가 yellow와 같을 경우(테두리를 제외한 길이) 반환
    for(let i = 0; i < divisor.length; i++){
        const height = divisor[i];
        
        for(let j = 0; j < divisor.length; j++){
            const width = divisor[j];
            
            if(width * height === size && (width - 2) * (height - 2) === yellow) return [width, height];
        }
    }
}