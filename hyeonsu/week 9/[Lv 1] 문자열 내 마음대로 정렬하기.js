function solution(strings, n) {
  var answer = [];
  // 각 배열의 요소들에 대해 n번쨰 인덱스의 단어를 요소의 앞에 추가해줌
  // sort() 해주고
  // slice로 제거해주면 끝?
  const arr = strings.map((el) => {
    el = el[n] + el;
    return el;
  });
  arr.sort();
  const result = arr.map((el) => {
    return el.slice(1);
  });
  return result;
}
