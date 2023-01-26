function solution(phone_number) {
  let answer = "";
  let reversePhone = [...phone_number].reverse().join("");
  for (let i = 0; i < phone_number.length; i++) {
    answer += i < 4 ? reversePhone[i] : "*";
  }
  return [...answer].reverse().join("");
}
