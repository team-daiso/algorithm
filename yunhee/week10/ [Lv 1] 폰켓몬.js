function solution(nums) {
    // 고를 수 있는 폰켓몬 수
    const choice = nums.length / 2;
    
    // 폰켓몬 종류 번호의 중복 제거
    const dedupl = [...new Set(nums)];
    
    // 중복 제거한 폰켓몬의 수가 고를 수 있는 폰켓몬 수보다 더 크다면 고를 수 있는 폰켓몬 수, 작다면 중복 제거한 폰켓몬의 수
    return dedupl.length > choice ? choice : dedupl.length;
}