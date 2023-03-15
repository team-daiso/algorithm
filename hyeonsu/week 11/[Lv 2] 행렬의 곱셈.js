function solution(arr1, arr2) {
  const answer = [];
  // 첫번째 요소의 요소들 x 각 요소들의 첫번째 요소들
  // answer[0].push()
  // arr1[0][0] * arr2[0][0]
  // arr1[0][1] * arr2[1][0]
  // arr1[0][2] * arr2[2][0]

  // arr1[0][0] * arr2[0][1]
  // arr1[0][1] * arr2[1][1]
  // arr1[0][2] * arr2[2][1]

  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let element = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        element += arr1[i][k] * arr2[k][j];
      }
      arr.push(element);
    }
    answer.push(arr);
  }

  return answer;
}