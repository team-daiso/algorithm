function solution(n, m, sections) {
    // 칠해야 하는 구역이 페인트칠 한번으로 끝나면
    if(sections[sections.length - 1] - sections[0] + 1 <= m) return 1;
    
    let paintCnt = 1;
    let current = sections[0] + m; // 첫번째 구역에서 페인트칠 한번
    
    // 칠해야 하는 구역이 흩어져있으면
    for(let i = 1; i < sections.length; i++){
        // 현재 구역이 이전에 페인트칠 한 범위 안에 있다면 넘김
        if(sections[i] < current) continue;
        // 이전 페인트칠 범위를 넘었다면 이번 구역에 페인트칠을 새로 해줌
        else {
            current = sections[i] + m;
            paintCnt++;
        }
    }
    
    return paintCnt;
}