function solution(phone_number) {
  const hiddenLength = phone_number.length - 4;
  const hiddenNums = '*'.repeat(hiddenLength) + phone_number.slice(hiddenLength);

  return hiddenNums;
}
