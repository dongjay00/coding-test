const nums = new Set(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((num) => +num % 42)
);

console.log(nums.size);
