function solution(nums) {
  // 주어진 nums.length/2 만큼 폰켓몬을 골라야 함
  // 그런데 그 수만큼 포켓몬을 골랐을 때 고를 수 있는 종류의 최댓값은?
  // 중복을 싹 다 없애버림 singleNum
  // 그 후 singleNum의 길이랑 nums.length/2하고 비교
  // 3 - '2', '3 - 3', '2' - 3
  nums.sort((a, b) => a - b);
  const singleNums = nums.filter((el, idx) => nums.indexOf(el) === idx);
  return singleNums.length >= nums.length / 2
    ? nums.length / 2
    : singleNums.length;
}
