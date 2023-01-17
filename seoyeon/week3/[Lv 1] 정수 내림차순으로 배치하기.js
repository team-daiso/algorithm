function solution(n) {
    return +[...(n+'')].sort((a,b)=> b - a).join('');
}