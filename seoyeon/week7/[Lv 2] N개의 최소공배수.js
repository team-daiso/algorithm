function solution(arr) {
    // a, b의 최소공배수 = a * b / 최대공약수
    // a, b의 최대공약수 = a % b ? b / (a % b): b 
    // n개의 수의 최소 공배수는 우선 2개의 수의 최대공약수를 구하고, 최대 공약수와 다른 수의 최대공약수를 구해나가면 된다.

    let lcm = arr[0];
    
    for(let i = 1; i < arr.length; i++){
       lcm = lcm * arr[i] / gcd(lcm, arr[i])
    }
    
    return lcm;
}

function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b
}