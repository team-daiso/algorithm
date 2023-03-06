function solution(nums) {
  const set = new Set(nums).size;
  const half = nums.length / 2;

  return set > half ? half : set;
}
