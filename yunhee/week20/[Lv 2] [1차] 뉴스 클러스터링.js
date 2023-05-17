function splitWord(str) {
  const arr = [];

  str = str.toUpperCase();

  for (let i = 0; i < str.length - 1; i++) {
    const newStr = str[i] + str[i + 1];

    if (/[A-Z]{2}/g.test(newStr)) arr.push(newStr);
  }

  return arr;
}

function solution(str1, str2) {
  // 문자열을 대문자로 변환하고 영문자만 필터해서 2두글자씩 끊음
  str1 = splitWord(str1);
  str2 = splitWord(str2);

  const intersection = [];
  let union = [];

  for (let str of str1) {
    const index = str2.indexOf(str);

    if (index > -1) {
      str2.splice(index, 1);
      intersection.push(str);
    }

    union.push(str);
  }

  union = union.concat(str2);

  // 집합 A와 집합 B가 모두 공집합일 경우에는 J(A, B) = 1
  if (intersection.length === union.length) return 65536;

  // 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
  return Math.floor((intersection.length / union.length) * 65536);
}
