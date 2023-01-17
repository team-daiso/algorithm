function solution(A,B){
  // A와 B 는 숫자로 이루어진 배열
  // A와 B를 오름차순으로 정렬
  // A의 0 번 인덱스의 요소와 B의 B.length-1 번 인덱스의 요소를 곱해줌
  let result = 0;
  let sortedB = B.sort((a, b) => a - b);
  A.sort((a, b) => a - b).forEach((num, idx) => {
    result += num * sortedB[B.length - 1 - idx];
  });
  return result;
}