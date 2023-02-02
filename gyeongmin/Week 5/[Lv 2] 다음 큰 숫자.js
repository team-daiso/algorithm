function solution(n) {
    let nLen = n.toString(2).split('1').length;
    
    for(let next = n+1; next < 1000000; next++){
        console.log(next)
        if(next.toString(2).split('1').length === nLen){
            return next
        }
    }
}