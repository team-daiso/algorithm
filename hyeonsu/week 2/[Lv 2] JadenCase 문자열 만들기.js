function solution(s) {
	// 단어의 첫 글자를 대문자로 만들어야 함
		// 이떄 첫 글자가 아니라 나머지는 다 소문자여야 함
	// 따라서 모든 글자를 소문자로 만들어주는것이 먼저
	// 단어 사이는 ' ' 로 나눠져 있기 때문에, 얘를 기준으로 배열로 만들어줌
	// 배열에 map을 이용해 첫 글자를 대문자로 바꿔줌
	// 다시 문자열로 만들어줌. 기준은 다시 ' '
  let sArr = s
    .toLowerCase()
    .split(" ")
    .map((str) => {
      if (str !== "") {
        return str.replace(str[0], str[0].toUpperCase());
      }
    });
  const answer = sArr.join(" ");
  return answer;
}