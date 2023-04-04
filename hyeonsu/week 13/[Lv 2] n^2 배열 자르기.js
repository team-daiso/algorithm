// 메모리 초과났어여
function solution(n, left, right) {
  // n행 n열 크기의 비어있는 2차원 배열을 만든다.
  // i = 1~n까지 다음을 반복한다.
  // i행 i열에는 숫자 i를 채우고, 그 영역은 모두 숫자 i로 채운다.
  // 영역 =  i행 i열까지
  // 1차원 배열을 만든다. 행을 전부 잘라서 오려붙임
  // 이렇게 만든 1차원 배열의 [left]~[right]까지의 요소들만 새로운 배열로.
  let answer = [];
  // 2차원 배열 만들어줌. 속은 비었음
  for (let i = 1; i <= n; i++) {
    answer.push(Array.from({ length: n }));
  }
  const newArr = answer
    .map((arr, idx) => {
      return arr.map((el, id) => {
        return Math.max(idx, id) + 1;
      });
    })
    .flat()
    .slice(left, right + 1);
  return newArr;
}
