function solution(numbers) {
    let compare = [0,1,2,3,4,5,6,7,8,9]
    return compare.reduce((acc, cur) => acc + (numbers.includes(cur) ? 0 : cur), 0);
}