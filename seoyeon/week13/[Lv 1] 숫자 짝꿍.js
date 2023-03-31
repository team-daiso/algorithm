function solution(X, Y) {
    let x = {};
    let y = {};
    
    for(let el of X){
        x[el] = ++x[el] || 1;
    }
    for(let el of Y){
        y[el] = ++y[el] || 1;
    }
    
    let sum = '';
    let keys = Object.keys(x);
    for(let v of keys){
        if(!!y[v]){
            let min = Math.min(y[v],x[v]);
            sum += v.repeat(min);
        }
    }
    
    sum = sum.split('').sort((a,b) => b-a);
		// '00'이런애들 걸러내기 위해서
    let a = sum.filter(v => v === '0').length;
    
    let j = sum.join('');
    return j === "" ? "-1" : (j.length === a ? "0" : j)
}