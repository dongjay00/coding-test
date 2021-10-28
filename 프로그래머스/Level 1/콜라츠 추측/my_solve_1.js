function solution(num) {
  let answer = 0;
  let cnt = 0;
  while (true) {
    if (num === 1) {
      answer = cnt;
      break;
    }
    num = num % 2 ? num * 3 + 1 : parseInt(num / 2);
    cnt += 1;
    if (cnt === 500) {
      answer = -1;
      break;
    }
  }
  return answer;
}
