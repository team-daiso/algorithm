function solution(s) {
  // n개의 요소를 가지는 튜플을 n - 튜플
  // 중복 가능 (2,3,1,2)
  // 순서가 있음..순서가 다르면 다른거임 (1, 2, 3) ≠ (1, 3, 2)
  // 원소 개수는 유한함
  // 중복 없는 튜플이 주어짐
  // 집합기호로 표현이 가능하다~
  // {{a1}, {a1, a2}, {a1, a2, a3}, {a1, a2, a3, a4}, ... {a1, a2, a3, a4, ..., an}}
  // 집합은 순서가 바뀌어도 상관이 없다~
  // "{{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}"
  const answer = [];
  const answerArr = [];
  const arr = s.split("");
  arr.splice(0, 1);
  arr.splice(arr.length - 1, 1);
  let numString = "";
  arr.map((el, idx) => {
    const reg = /\d/;
    if (el === "{") {
      answerArr.push([]);
    }
    if (reg.test(el)) {
      numString += el;
    }
    if (el === "," || el === "}") {
      if (numString !== "") answerArr[answerArr.length - 1].push(+numString);
      numString = "";
    }
  });
  answerArr.sort((a, b) => a.length - b.length);

  answerArr.map(el => {
    el.map(num => {
      if (!answer.includes(num)) answer.push(num);
    });
  });
  return answer;
}
