function solution(s) {
  let hash = {};
  let count = 0;

  let first = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === first) hash[first] = ++hash[first] || 1;
    else hash["else"] = ++hash["else"] || 1;

    if (hash[first] === hash["else"]) {
      count++;
      hash[first] = 0;
      hash["else"] = 0;
      if (!!s[i + 1]) first = s[i + 1]; // i가 마지막 값이면, s[i+1]가 undefined가 나와서 first값을 이용하여 비교할 수 없다.
    }
  }
  // 'baaa' : 2 인 경우, for문까지 돌면 count가 1이라서
  if (hash[first] != hash["else"]) count++;

  return count;
}
