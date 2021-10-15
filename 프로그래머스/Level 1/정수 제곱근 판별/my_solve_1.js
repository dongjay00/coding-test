function solution(n) {
  let answer = 0;
  let root = parseInt(Math.sqrt(n));
  answer = root ** 2 === n ? (root + 1) ** 2 : -1;
  return answer;
}
