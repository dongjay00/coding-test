function solution(n) {
  var arr = n.toString().split("");
  var sum = 0;
  arr.forEach((e) => {
    sum += parseInt(e);
  });
  return sum;
}
