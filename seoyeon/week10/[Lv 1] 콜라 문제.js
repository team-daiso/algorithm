function solution(a, b, n) {
    let getCola = 0;
    let totalGetCola = 0;
    
    while(n >= a){
        getCola = parseInt(n / a) * b;
        totalGetCola += getCola
        n = getCola + n % a
    }
    
    return totalGetCola;
}