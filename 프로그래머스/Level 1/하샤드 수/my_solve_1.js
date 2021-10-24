function solution(x) {
  const nums = String(x)
    .split("")
    .map((num) => +num);
  const total = nums.reduce((acc, cur) => acc + cur);
  return !(x % total);
}
