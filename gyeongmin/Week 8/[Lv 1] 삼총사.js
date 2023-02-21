function solution(number) {
  var answer = 0;
  const threePeople = (arr, start) => {
    if (arr.length === 3) {
      answer += arr.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }
    for (let i = start; i < number.length; i++) {
      threePeople([...arr, number[i]], i + 1);
    }
  };
  threePeople([], 0);
  return answer;
}
