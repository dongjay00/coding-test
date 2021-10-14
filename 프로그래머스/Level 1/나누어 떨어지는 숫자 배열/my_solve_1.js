function solution(arr, divisor) {
  const nums = arr.sort((a, b) => a - b);
  const answer = [];
  nums.forEach((num) => {
    if (num % divisor === 0) answer.push(num);
  });
  if (answer.length === 0) answer.push(-1);
  return answer;
}
