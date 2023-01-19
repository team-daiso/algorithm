function solution(s) {
  // 이진 변환의 결과
  let binary = s;
  let count = [0, 0];

  while (binary !== '1') {
    oneArrLength = binary.split('').filter((num) => num === '1').length;
    count[1] += binary.length - oneArrLength;
    binary = oneArrLength.toString(2);
    count[0]++;
  }

  return count;
}
