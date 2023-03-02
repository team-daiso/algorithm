function solution(n, arr1, arr2) {
    let fullMap = arr1.map((v,i) => (v | arr2[i]).toString(2));
    let decodingMap = [];
    
    for(let a of fullMap){
        let sum = ''
        //2진수 앞이 0인경우는 따로 빈 문자열을 추가해준다
        if(a.length != n) sum += ' '.repeat(n - a.length);
        
        for(let b of a){
            sum += (b === '1' ? '#' : ' ');
        }
        decodingMap.push(sum);
    }
    
    return decodingMap;
}