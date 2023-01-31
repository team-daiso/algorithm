function solution(n) {
    let result = ''
    while(result.length < n){
        if(result.length % 2){
            result += '박';
        }else{
            result += '수';
        }
    }
    return result;
}