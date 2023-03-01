function solution (n) {
    return fibonacci(n);
  }
  
  const fibonacci = (n) => {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1; dp[1] = 1;
    
    for(let i = 2; i <= n; i++)
      dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    
    return dp[n];
  }
  
  //또는 
//   const fibonacci = (n) => {
//     const dp = [0, 1, 2];
    
//     for(let i = 3; i <= n; i++)
//       dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    
//     return dp[n];
//   }
