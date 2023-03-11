function solution(t, p) {
  var answer = 0;
  let starter = 0;
  let finisher = p.length - 1;
  while (finisher < t.length) {
    let num = t.slice(starter, finisher + 1);
    if (Number(num) <= Number(p)) {
      answer++;
    }
    starter++;
    finisher++;
  }
  return answer;
}

function solution(t, p) {
  // 숫자로 이루어진 문자열 t와 p
  // t의 길이 >= p의 길이
  // p와 길이기 같게끔 t를 자름..
  // 거기서 p보다 작거나 같은수 몇개?
  // 슬라이딩 윈도우?? 이름맞나?? 사용하면 될듯
  const nums = [];
  let start = 0;
  let end = p.length;
  while (end - 1 !== t.length) {
    const slicedNum = t.slice(start, end);
    if (slicedNum <= p) {
      nums.push(t.slice(start, end));
    }
    start++;
    end++;
  }
  return nums.length;
}
