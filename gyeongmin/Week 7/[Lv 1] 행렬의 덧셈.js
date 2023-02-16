function solution(arr1, arr2, answer = []) {
  for (let i = 0; i < arr1.length; i++) {
    let inArr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      inArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(inArr);
  }
  return answer;
}
