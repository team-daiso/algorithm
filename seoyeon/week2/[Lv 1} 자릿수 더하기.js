function solution(n){
    let newN = n.toString();
    return [...newN].reduce((acc, cur) => acc + Number(cur), 0);
}
