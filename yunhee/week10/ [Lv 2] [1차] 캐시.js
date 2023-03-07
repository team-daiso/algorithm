function solution(cacheSize, cities) {
    // LRU(Least Recently Used)는 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식
    // 캐시 크기보다 메모리가 많아지면 가장 처음 넣은 메모리 제거 => queue 자료구조와 유사
    // Cache Hit : CPU 가 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우 => 실행 시간 1
    // Cache Miss : CPU 가 참조하고자 하는 메모리가 캐시에 존재하지 않을 경우 => 실행 시간 5
    const cache = [];
    let time = 0; // 실행 시간
    
    cities = cities.map(city => city.toLowerCase());
    
    for(let city of cities){
        const cityIndex = cache.indexOf(city);
        
        // 처음 검색한 도시라면 Cache Miss이므로 5 추가
        if(cityIndex < 0) time += 5;
        // 이전에 검색한 도시라면 Cache Hit이므로 1 추가, 검색한 도시 배열에서 제거
        else {
            time += 1;
            cache.splice(cityIndex, 1);
        }
        
        // 검색한 도시 배열에 추가
        cache.push(city);
        
        // 캐시 크기가 cacheSize보다 크거나 같다면 맨 처음(가장 오래된 메모리) 제거
        if(cache.length > cacheSize) cache.splice(0, 1);
    }
    
    return time;
}