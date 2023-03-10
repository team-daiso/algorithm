function solution(cacheSize, cities) {
  let answer = 0;
  let arr = [];
  cities = cities.map((el) => el.toUpperCase());

  //cacheSize가 0인경우는 계속 실행해야하므로
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    if (!arr.includes(cities[i])) {
      answer += 5;
      arr.push(cities[i]);
      if (arr.length > cacheSize) {
        arr.shift();
      }
    } else {
      answer++;
      let idx = arr.indexOf(cities[i]);
      arr.splice(idx, 1); // idx 인덱스에서 1개 요소 제거
      arr.push(cities[i]); // 인덱스 찾아서 제거 후 맨 뒤에 삽입
    }
  }
  return answer;
}
