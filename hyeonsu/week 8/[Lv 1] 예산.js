function solution(d, budget) {
  // 오름차순 정렬해줌
  // 0번쨰 idx부터 더해줌
  // 더해주고 나서 더한 값 < budget 이면 다음 idx를 더해줌
  if (d.reduce((pre, cur) => pre + cur) === budget) {
    return d.length;
  }
  d.sort((a, b) => a - b);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    if (sum + d[i] <= budget) {
      sum += d[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}

// 빼기 버전
function solution(d, budget) {
  // 내림차순 정렬해줌
  // budget에서 d에서 pop해준 요소들을 뺴줌
	// 만약 budget이 0보다 크면 새로운 arr에 push 해줌
	// arr의 길이를 리턴해줌
  d.sort((a, b) => b - a);
  let pass = [];
  while (budget >= 0) {
    const dept = d.pop();

    budget -= dept;
    if (budget >= 0) {
      pass.push(dept);
    }
  }
  return pass.length;
}
