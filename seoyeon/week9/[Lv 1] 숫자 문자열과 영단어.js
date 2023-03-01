function solution(s) {
    const stringNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let plusWord = '';
    let result = '';
    
    for(let el of s){
        if(Number.isNaN(+el)){
            plusWord += el;
            if(stringNum.includes(plusWord)){
                result += stringNum.indexOf(plusWord);
                plusWord = '';
            }
        }else{
            result += el;
        }
    }
    
    return +result;
}

// 다른사람 풀이
// 단어로 split했던 array를 join으로 다시 묶으면서 그 사이에 i(해당 숫자)를 넣어주는 방법....
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}