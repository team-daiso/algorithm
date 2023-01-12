function solution(x, n) {
  // n만큼의 길이를 갖는 배열 생성 후, fill()로 각 자리에 undefined 할당
  return Array(n)
    .fill()
    .map((_, i) => (i + 1) * x);
}

// 영문은 모르겠으나 이게 됩니다 심지어 더 빨라요
function solution2(x, n) {
  return [...Array(n)].map((_, i) => (i + 1) * x);
}
