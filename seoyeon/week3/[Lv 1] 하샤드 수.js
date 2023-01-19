function solution(x) {
    let plus = [...(x+'')].reduce((acc, cur)=> acc + Number(cur),0 )
    return x % plus === 0;
}