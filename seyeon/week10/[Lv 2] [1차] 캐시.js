function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  if (cacheSize === 0) return cities.length * 5;

  for (let city of cities) {
    city = city.toUpperCase();
    const idx = cache.indexOf(city);

    if (idx !== -1) {
      time += 1;
      cache.splice(idx, 1);
    } else {
      time += 5;
    }

    if (cache.length === cacheSize) cache.shift();
    cache.push(city);
  }

  return time;
}
