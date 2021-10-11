function solution(n) {
  var answer = 0;
  var dp = [];

  dp[0] = 0;
  dp[1] = 1;

  for (var i = 2; i < n + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  answer = dp[n];
  return answer;
}
