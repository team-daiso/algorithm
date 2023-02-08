function solution(a, b) {
  // reduce를 사용
  // 초깃값을 0으로 잡아주고
  // 현재 요소 * b[현재 인덱스]를 더해주면
  return a.reduce((previousValue, currentValue,i) => previousValue + currentValue * b[i],0)  
}

function solution(a, b) {
  let result = 0;
  for(let i = 0 ; i < a.length ; i ++) {
      result += a[i]*b[i]
  }
  return result  
}