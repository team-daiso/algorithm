function solution(arr) {
  var answer = [];
  // arr는 0~9 사이의 자연수로 이루어진 배열임
  // 각 숫자는 연속되어 있을 수도 있음. 이 연속된 숫자들은 한개만 남기고 지우고 싶음
  // 입력: [1,1,3,3,0,1,1]
  // 출력: [1,3,0,1]
  // 일단 출력값은 입력값에서 일정 요소를 제외한 값
  // map은 쓰기 힘들고 filter를 사용해야 함

  function check(el, idx) {
    if (arr[idx - 1] !== el) {
      return true;
    }
  }
  let numbers = arr.filter((num, idx) => {
    return check(num, idx);
  });
  answer = numbers;
  return answer;
}
//  첫번쨰의 리팩터링
function solution(arr) {
  return arr.filter((num, idx) => arr[idx - 1] !== num);
}

// 큐 방법으로 풀 경우.... answer에 같은 요소가 있어도 넣는 방법을 해결해야 함
  // 성공은 했으나 시간효율성에서 계속 거림..
function solution(arr) {
  var answer = [];
  while (arr.length !== 0) {
    let num = arr.shift();
    if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }
  return answer;
}
