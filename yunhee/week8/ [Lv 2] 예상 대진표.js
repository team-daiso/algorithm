// ⭕ 통과
// b가 a보다 크다는 가정 하에 풀었기 때문에 a가 b보다 큰 경우 처리!
function solution(n,a,b) {
    let round = 0;
    
    // a가 b보다 크다면 a를 b에 할당해준다.
    const temp = b;
    
    if(a > b) {
        b = a;
        a = temp;
    }  
    
    // a와 b가 겨루는 경우 a의 바로 다음 번호가 b이므로 b - a는 0
    while(b - a > 0){
        // 라운드마다 배열의 길이가 반이 되므로 참가 번호도 2로 나눔
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        
        // 다음 라운드 진출
        round++;
    }
    
    return round;
}

// ❌ 정확성 반타작
// 어차피 라운드마다 길이가 반으로 나눠지고 그에 따라 새 번호가 배정되니 a와 b를 2로 나눔
// 8명 a : 4, b : 7 => 4명 a : 2, b : 4 => 2명 a : 1, b : 2
function solution(n,a,b) {
    let round = 0;
    
    // a와 b가 겨루는 경우 a의 바로 다음 번호가 b이므로 b - a는 0
    while(b - a > 0){
        // 라운드마다 배열의 길이가 반이 되므로 참가 번호도 2로 나눔
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        
        // 다음 라운드 진출
        round++;
    }
    
    return round;
}

// ❌ 테스트 케이스 실패
// 이진 탐색처럼 배열을 왼쪽, 오른쪽으로 계속 나눠서 찾는 방법
function solution(n,a,b) {
    let arr = [...Array(n)].map((_, idx) => idx + 1);
    let round = 1; // 첫 라운드부터 계산
    
    while(b - a > 0){
        const length = arr.length / 2;
        
        // 배열을 왼쪽, 오른쪽으로 나눈다.
        let left = arr.slice(0, length);
        let right = arr.slice(length); 
        
        // 왼쪽에 a, b가 모두 있는 경우
        if(left.indexOf(a) >= 0 && left.indexOf(b) >= 0) arr = left;
        // 오른쪽에 a, b가 모두 있는 경우
        else if(right.indexOf(a) >= 0 && right.indexOf(b) >= 0) arr = right;
        // 왼쪽, 오른쪽 각각에 a, b가 있는 경우
        else {
            arr = [...left.slice(0, left.length / 2), ...right.slice(0, right.length / 2)];
        }
        
        // 나뉠 때마다 번호를 다시 배정받는다. 만나기 전까지 항상 이긴다는 가정이니 -1을 해서 앞 번호로 변경
        a--;
        b--;    
        
        // 다음 라운드 진출
        round++;
    }
    
    return round;
}