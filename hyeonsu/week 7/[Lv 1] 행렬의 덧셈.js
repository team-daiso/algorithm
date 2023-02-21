function solution(arr1, arr2) {
  let answer = [];
  // 배열을 2개 입력받음 arr1 arr2
  // 행 = arr.length 열 =arr[0].length
  // 만약 arr1 = [[1,2],[2,3]], arr2 = [[3,4],[5,6]] 를 입력받았을 경우
  // [[arr1[0][0] + arr2[0][0],[[arr1[0][1] + arr2[0][1], arr1[1][0] + arr2[1][0]] ....

  // 답이 들어갈 배열을 넣어줌.. 어차피 arr1.length === answer.length === arr2.length 임
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
  }

  // arr1[0][0] + arr2[0][0] , arr1[0][1] + arr2[0][1] .......
  for (let k = 0; k < answer.length; k++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[k][j] = arr1[k][j] + arr2[k][j];
    }
  }

  return answer;
}
