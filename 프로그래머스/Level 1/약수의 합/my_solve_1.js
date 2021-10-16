function solution(n) {
  let answer = 0;
  const mid = parseInt(Math.sqrt(n));
  for (let num = 1; num < mid + 1; num++) {
    if (num ** 2 === n) answer += num;
    else if (n % num === 0) answer += num + parseInt(n / num);
  }
  return answer;
}
