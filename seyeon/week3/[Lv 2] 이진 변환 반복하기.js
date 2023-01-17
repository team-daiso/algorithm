function solution(s) {
  // 0을 제거한 배열
  let oneCollection = [];
  // 이진 변환의 결과
  let binary = s;
  let count = [0, 0];

  while (binary !== '1') {
    oneCollection = binary.split('').filter((num) => num === '1');
    count[1] += binary.length - oneCollection.length;
    binary = oneCollection.length.toString(2);
    count[0]++;
  }

  return count;
}
