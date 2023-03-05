function solution(nums) {
  let numsSet = new Set(nums);
  return nums.length / 2 >= numsSet.size ? numsSet.size : nums.length / 2;
}
