function solution(nums) {
  let answer = nums.length / 2;
  const setNums = [];
  nums.forEach((num) => {
    if (setNums.includes(num) === false) {
      setNums.push(num);
    }
  });
  return setNums.length >= answer ? answer : setNums.length;
}
