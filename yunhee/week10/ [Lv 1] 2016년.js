function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let days = b; // 모든 날짜를 더해야하므로 b부터 시작
    
    // a - 1월까지 날짜를 전부 더하기
    for(let i = 0; i < a - 1; i++) days += month[i];
    
    // 배열은 0번째 인덱스부터 시작하므로 -1
    return week[(days - 1) % 7];
}