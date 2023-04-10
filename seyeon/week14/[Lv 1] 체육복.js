function solution(n, lost, reserve) {
  const spare = filtering(reserve, lost);
  const lostStudents = filtering(lost, reserve);
  const lent = []; // 빌려준 체육복

  for (let student of lostStudents) {
    for (let clothes of spare) {
      const isLendable = [student - 1, student + 1].includes(clothes);

      if (isLendable && !lent.includes(clothes)) {
        lent.push(clothes);
        break;
      }
    }
  }

  return n - lostStudents.length + lent.length;
}

// 본인의 체육복을 도난 당했을 땐, 자신의 여분의 체육복을 빌려줄 수 없음
function filtering(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num)).sort((a, b) => a - b);
}
