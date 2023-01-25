let memo = [0, 1]

function solution(n) {
    for(let i = 2; i <= n ; i ++) {
        memo.push( (memo[i-1] + memo[i-2]) % 1234567 )
    }
  return memo[n]
}
