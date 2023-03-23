function solution(clothes) {
  var answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = ++obj[clothes[i][1]] || 1;
  }
  for (key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}
