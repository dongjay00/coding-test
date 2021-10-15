function solution(x, n) {
  const answer = [];
  const term = x;
  while (n > 0) {
    answer.push(x);
    x += term;
    n -= 1;
  }
  return answer;
}
