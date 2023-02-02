function solution(n) {
  // n보다 큰 수를 구해야 함
  // n보다 큰 자연수
  // n.toString(2) 의 1의 개수와 n보다 큰수.toString(2)는 1의 갯수가 같음
  // 위를 만족하는 조건 중 가장 작은 수

  // n을 2진수로 바꾸고 1의 갯수를 카운트
  // A: n+1을 2진수로 바꾸고 1의 갯수를 카운트
  // 만약 1의 갯수가 같다면 스탑하고 n+1을 리턴
  // 만약 1의 갯수가 다르다면 n+1하고 A를 반복
  let hex = n.toString(2);
  let nOneCount = 0;
  [...hex].map((el) => {
    if (el === "1") nOneCount++;
  });
  // n2진수의 1의 갯수 카운트 완료(nOneCount)
  let nextNum = n + 1;
  while (true) {
    let nextHex = nextNum.toString(2);
    let oneCount = 0;
    [...nextHex].map((el) => {
      if (el === "1") oneCount++;
    });
    if (nOneCount === oneCount) {
      break;
    } else {
      nextNum += 1;
    }
  }
  return nextNum;
}
