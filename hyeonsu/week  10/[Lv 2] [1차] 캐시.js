function solution(cacheSize, cities) {
  // cache의 맨 앞 index에는 젤 오래된 친구가 오게끔
  // LRU는 제일 오랫동안 참조가 되지 않은 친구를 교체하는 방식
  // cache.length 가 cacheSize보다 작은 경우(미만임)
  // 일단 cache에 있는지 확인
  // 있으면 answer ++
  // splice를 이용해 해당 city를 없애버림
  // cache.push(city) 🧸
  // 없으면 cache.push(city) 🧸하고 answer += 5;
  // 아니면 cache가 꽉 찬 경우
  // cache에 있는지 확인
  // 있으면 answer ++
  // splice를 이용해 해당 city를 없애버림
  // cache.push(city) 🧸
  // 없으면
  // 일단 answer += 5
  // 맨 앞의 cache 를 splice로 제거
  // 그리고 cache.push(city) 🧸

  // cache.push(city) 는 공통적으로 해줘야 함
  if (cacheSize === 0) return cities.length * 5;
  const cache = [];
  let answer = 0;
  cities.forEach((city) => {
    city = city.toLowerCase();
    const cityIndex = cache.indexOf(city);
    if (cityIndex !== -1) {
      // city 가 cache에 있는 경우
      answer++;
      cache.splice(cityIndex, 1);
    } else {
      // 없는 경우
      answer += 5;
      if (cache.length >= cacheSize) {
        // 없는데 심지어 캐시가 꽉 참.
        cache.shift();
      }
    }
    cache.push(city);
  });
  return answer;
}
