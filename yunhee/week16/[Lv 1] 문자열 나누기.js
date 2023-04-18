function solution(s) {
  // x와 x가 아닌 다른 글자들이 나온 횟수를 센다
  // 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리
  // 남은 부분에 대해서 이 과정을 반복
  let count = 0;
  let x = s[0];

  let xCount = 0;
  let otherCount = 0;

  [...s].forEach((char, index) => {
    char === x ? xCount++ : otherCount++;

    if (xCount === otherCount) {
      xCount = 0;
      otherCount = 0;
      count++;
      x = s[index + 1];
    } else if (index === s.length - 1) count++;
  });

  return count;
}
