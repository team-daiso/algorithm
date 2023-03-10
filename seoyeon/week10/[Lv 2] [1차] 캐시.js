// 캐시교체알고리즘 LRU : 캐시의 용량은 한정적인데다가 자주 사용되는 값 혹은 사용될 예정인 값은 시시각각 변한다. 페이지를 교체할 때 가장 오랫동안 사용되지 않은 페이지를 교체 대상으로 삼는 기법이다.
function solution(cacheSize, cities) {
    let cache = [];
    let runTime = 0;
    
    cities.forEach((e) => {
        e = e.toLowerCase();
        if(cache.includes(e)) {
            runTime++;
            cache.splice(cache.indexOf(e),1); //꼭 앞에서만 빠지는게 아니므로 주의!
        } else {
            runTime += 5;
        }
        cache.push(e);
        if(cache.length > cacheSize) cache.shift();
    })
    
    return runTime;
}