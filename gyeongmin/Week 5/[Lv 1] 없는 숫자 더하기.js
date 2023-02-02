function solution(numbers) {
    return [1,2,3,4,5,6,7,8,9].filter(el=> !numbers.includes(el)).reduce((pre,cur)=>pre+cur)
}