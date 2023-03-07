function solution(n, arr1, arr2) {
  // arr1 과 arr2에 대해 요소 하나하나를 보고 해야하나/
  // 아니면 따로 만들고 비교를 해줘야하나?
  // 어어어ㅓ어엉

  const answer = [];
  for (let i = 0; i <= n - 1; i++) {
    let route = "";
    const ele1 = checkLength(arr1[i], n);
    const ele2 = checkLength(arr2[i], n);
    for (let j = 0; j <= n - 1; j++) {
      ele1[j] === "1" || ele2[j] === "1" ? (route += "#") : (route += " ");
    }
    answer.push(route);
  }
  return answer;
}

function checkLength(arg, len) {
  // 2진수로 바꿔주고 길이가 len보다 모자라면 0으로 채워주기
  let ele = arg.toString(2).padStart(len, 0);
  return ele;
}
