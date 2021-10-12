function solution(s) {
  var nums = s.split(" ").map((num) => +num);
  var max = Math.max(...nums).toString();
  var min = Math.min(...nums).toString();
  var answer = min + " " + max;
  return answer;
}
