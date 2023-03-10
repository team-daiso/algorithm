function solution(food) {
    let countBox = [];
    let result = '';
    
    for(let i = 1; i < food.length; i++){
        let num =  parseInt(food[i]/2);
        countBox[i] = `${i}`.repeat(num);  // '12'.repeat(0)이면 빈문자열이다.
    }
    
    result += countBox.join('') // 배열 join시 비어있는 인덱스는 빼고 합쳐진다.
		// 물은 무조건 0이다.
    result += '0';
    result += countBox.reverse().join('');
    
    return result;
}