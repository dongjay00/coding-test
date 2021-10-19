function solution(n) {
  let dp = [1, 2].concat(Array(n - 2).fill(0));
  for (let i = 2; i < n; i++) {
    let term = dp[i - 1] + dp[i - 2];
    dp[i] = term % 1000000007;
  }
  return dp[n - 1];
}
