function solution(lottos, win_nums) {
    // 당첨되었을지도 모르는 숫자, 당첨된 숫자가 몇개인지 구해주고 최고(모르는 숫자 + 당첨된 숫자), 최저(당첨된 숫자)를 구해준다.
    const matchNum = [6,6,5,4,3,2,1]
    
    let unknown = lottos.filter(v => v === 0).length;
    let winning = lottos.filter(v => win_nums.includes(v)).length;
    
    return [matchNum[winning + unknown], matchNum[winning]];
}