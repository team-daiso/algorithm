function solution(nums) {
  //     let answer = '';

  //     for (let i = 0; i < nums.length; i++) {
  //       if (i >= nums.length - 4) {
  //         answer += nums[i]
  //       }else{
  //         answer += "*"
  //       }
  //     }

  answer = "*".repeat(nums.length - 4) + nums.slice(-4);

  return answer;
}
