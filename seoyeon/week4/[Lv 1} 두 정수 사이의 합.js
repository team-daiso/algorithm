function solution(a, b) {
    if(a === b) return a;
    
    let big = 0;
    let small = 0;
    if(a > b){
        big = a;
        small = b;
    }else{
        big = b;
        small =a;
    }
    
    let sum = small;
    while(small != big){
        small++
        sum += small;
    }
    return sum;

    //가우스 공식...
    // return (a + b) * ( Math.abs(b-a) + 1 ) / 2;
}