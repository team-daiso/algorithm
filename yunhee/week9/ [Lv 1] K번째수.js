function solution(array, commands) {
    return commands.map(com => {
        const sliceArr = array.slice(com[0]-1, com[1]);
        sliceArr.sort((a, b) => a - b);
        
        return sliceArr[com[2]-1];
    })
}