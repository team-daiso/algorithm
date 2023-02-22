function solution(n,a,b){
    let cnt = 1;
    while(Math.ceil(a/2)!==Math.ceil(b/2)){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
    }
    
    return cnt;
}