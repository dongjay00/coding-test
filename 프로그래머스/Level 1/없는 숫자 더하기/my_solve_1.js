function solution(numbers) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer = nums.filter((num) => !numbers.includes(num));
  const total = answer.reduce((cur, acc) => {
    return cur + acc;
  }, 0);
  return total;
}
