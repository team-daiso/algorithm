function solution(numbers) {
    // 0부터 9까지 더한 값 - 현재 배열에 있는 숫자 합 = 제외된 숫자의 합
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}