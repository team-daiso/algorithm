function solution(s) {
  let answer = "";
  let words = s.split(" ");
  // s는 문자열이고 한 개 이상의 단어로 구성되어 있다.
  // 각 단어는 공백문자로 구분되어 있음
  // 각 단어의 짝수번 인덱스의 글자는 대문자로, 홀수번째는 소문자로
  // 0번쨰 인덱스는 대문자로 바꿔줘야함

  // split(' ')을 이용해 배열로 바꿔줌
  // 배열에 대해서 반복문
  // 다시 한번 반복문 사용해줌 j = 0 ; j < 단어.length ; i ++
  // 만약 i%2 ===0 이라면 toUpperCase();
  // 아니라면  toLowerCase();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase();
      } else {
        answer += words[i][j].toLowerCase();
      }
    }
    if (i < words.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

// 두번째 풀이
function solution(s) {
  // 빈 문자열 하나 두고 거기에 넣어주기
  // let answer = '';

  // 대문자를 표시해주는 변수 만들어주기
  // let isUpperCase = false;
  // 만약 공백이면 빈 문자열에 더해주고 isUpperCase = false;
  // isUpperCase = false; 면 대문자로 바꿔서 더해주고 isUpperCase = true
  // 반대면 소문자로 넣어주고 isUpperCase = false;

  let answer = "";
  let isUpperCase = false;
  [...s].map((char) => {
    if (char === " ") {
      answer += char;
      isUpperCase = false;
    } else {
      if (isUpperCase === false) {
        answer += char.toUpperCase();
        isUpperCase = true;
      } else {
        answer += char.toLowerCase();
        isUpperCase = false;
      }
    }
  });
  return answer;
}
