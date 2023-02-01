function solution(s) {
  // 배열을 하나 준비해줌
  // 그 배열에 앞글자를 하나 넣어줌 우선
  // 배열의 맨 마지막 글자와 단어의 i번쨰 글자가 같은지 비교
  // 같으면 배열에서 pop
  // 다르면 push해줌 i번째 극자를
  // 만약 배열이 비어있으면 다 제거가 가능하다는 말임
  let arr = [];
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (arr[arr.length - 1] !== s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }
  return arr.length === 0 ? 1 : 0;
}
