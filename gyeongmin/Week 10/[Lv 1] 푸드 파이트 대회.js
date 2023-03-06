function solution(food) {
    let answer = '';
    let first = '';
    food.shift();
    food.forEach((x,i)=>{
        for(let j = 1; j <= Math.floor(x/2); j++){
            first += i+1
        }
    })
    let second = first.split('').reverse().join('');
    return `${first}0${second}`
}