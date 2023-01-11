function solution(s) {
  // s는 문자열, 하지만 p와 y의 대소문자는 사실 상관없음
  // pnum과 ynum의 숫자가 같은지 다른지를 판단
  let answer = true;
  let pnum = 0;
  let ynum = 0;
  for (let letter of s) {
    if (letter.toUpperCase() === "P") {
      pnum += 1;
    } else if (letter.toUpperCase() === "Y") {
      ynum += 1;
    }
  }
  if (pnum !== ynum) {
    answer = false;
  }
  return answer;
};

function solution(s) {
  // s는 문자열, 하지만 p와 y의 대소문자는 사실 상관없음
  // s에서 P만 필터링한 배열의 길이와 Y만 필터링한 배열의 길이가 같은지?
  return (
    s
      .toUpperCase()
      .split("")
      .filter((letter) => letter === "P").length ===
    s
      .toUpperCase()
      .split("")
      .filter((letter) => letter === "Y").length
  );
};

// 위의 답에서 반복되는 코드를 따로 뺴냈습니다.
function solution(s) {
  // s는 문자열, 하지만 p와 y의 대소문자는 사실 상관없음
  // s에서 P만 필터링한 배열의 길이와 Y만 필터링한 배열의 길이가 같은지?
  function getLetterLength(str, upperletter) {
    return str
      .toUpperCase()
      .split("")
      .filter((letter) => letter === upperletter).length;
  };
  return getLetterLength(s, "P") === getLetterLength(s, "Y");
};

//왜 통과가 안되는지 모르겠어여 19 하고 28에서 걸려여
function solution(s) {
  // s는 문자열, 하지만 p와 y의 대소문자는 사실 상관없음
  // pnum과 ynum의 숫자가 같은지 다른지를 판단
  let result = true;
  s.split("").map((letter) => {
    if (letter.toUpperCase() === "P" || letter.toUpperCase() === "Y") {
      result = !result;
    }
  });
  return result;
};
