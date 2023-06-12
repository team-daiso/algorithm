function solution(msg) {
  const dictionary = [];
  const result = [];

  outer: for (let i = 0; i < msg.length; i++) {
    const cur = msg.slice(i);

    // 사전에서 가장 긴 문자열 찾기
    for (let j = 0; j < cur.length; j++) {
      const index = dictionary.indexOf(cur.slice(0, cur.length - j));

      // 찾았다면 색인 번호 출력하고 다음 글자 포함한 문자열을 사전에 등록
      // 주의! 찾은만큼 건너뛰어야 함 => KA를 찾았다면 다음에 A를 찾지않고 O를 찾아야 함
      if (index > -1) {
        result.push(27 + index);
        dictionary.push(cur.slice(0, cur.length - j + 1));
        i += dictionary[index].length - 1;
        continue outer;
      }
    }

    // 사전에서 못찾았다면 한 글자 색인 번호 출력 다음 글자 포함한 문자열을 사전에 등록
    result.push(msg[i].charCodeAt() - 64);
    dictionary.push(msg[i] + msg[i + 1]);
  }

  return result;
}
