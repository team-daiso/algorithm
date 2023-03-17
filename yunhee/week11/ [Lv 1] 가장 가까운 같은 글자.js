function solution(s) {
    return [...s].map((str,index) => {
        const currentIdx = s.slice(0, index).lastIndexOf(str);
        
        return currentIdx > -1 ? index - currentIdx : currentIdx;
    });
}