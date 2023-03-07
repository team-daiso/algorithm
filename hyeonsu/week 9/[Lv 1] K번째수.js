function solution(array, commands) {
  var answer = [];
  // commands의 인자인 배열들의 요소는 각각 시작점, 종료점 , 그리고 그렇게 나온 배열을 정렬했을 때 n번쨰 숫자를 의미
  for (let el of commands) {
    let start = el[0] - 1;
    let end = el[1];
    let arrIdx = el[2] - 1;
    let newArr = array.slice(start, end);
    newArr.sort((a, b) => a - b);
    answer.push(newArr[arrIdx]);
    console.log(newArr);
  }
  return answer;
}

function solution(array, commands) {
  // i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때 k번째에 있는 수는?
  const answer = [];
  commands.map((command) => {
    answer.push(
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
    );
  });
  return answer;
}
