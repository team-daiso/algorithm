function getOneCount(str){
    return [...str.toString(2)].filter(number => number === "1").length;
}

function solution(n) {
    // n보다 큰 자연수, 이진수로 변환했을 때 1의 갯수가 같음, 이 두 조건을 만족하는 가장 작은 수
    const oneCount = getOneCount(n);
    let nextMaxNumber = n + 1;
    
    while(oneCount < nextMaxNumber){
        if(oneCount === getOneCount(nextMaxNumber)) return nextMaxNumber;
        else nextMaxNumber++;
    }
}