// 몇 번 칠했는지 세는 count 변수, 칠하기 시작할 곳을 나타내는 startPoint를 선언
// section 배열을 순회하면서 요소를 만나면 count++
// startPoint = 요소 숫자 + m
// 다음 요소가 startPoint 보다 작으면 넘어가고 같거나 크면 count++ 반복

function solution(n, m, sections) {
  let count = 0;
  let startPoint = 1;

  sections.forEach((section) => {
    if (section >= startPoint) {
      count++;
      startPoint = section + m;
    }
  });

  return count;
}
