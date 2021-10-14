function solution(a, b) {
  var answer = 0;
  if (Math.abs(a - b) % 2)
    answer = (a + b) * (parseInt(Math.abs(a - b) / 2) + 1);
  else answer = (a + b) * parseInt(Math.abs(a - b) / 2) + parseInt((a + b) / 2);
  return answer;
}
