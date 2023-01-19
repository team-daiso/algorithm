function solution(s) {
    let answer = [0, 0];
    let sLen = 0;
  
    while (s.length > 1) {
      sLen = s.length;
      s = s.split("0").join("");
      answer[0]++;
      answer[1] += (sLen - s.length);
      //s길이를 2진수로 변환
      s = s.length.toString(2);
    }
  
    return answer;
  }