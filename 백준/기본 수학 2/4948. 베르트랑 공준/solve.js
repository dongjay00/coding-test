function isPrime(num) {
  let cnt = 0;
  if (num === 2 || num === 3) return true;
  if (num === 1 || num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const nums = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);

const result = [];
for (let i = 0; i < nums.length - 1; i++) {
  let n = nums[i];
  let cnt = 0;
  for (let j = n + 1; j <= 2 * n; j++) {
    if (isPrime(j)) cnt += 1;
  }
  result.push(cnt.toString());
}

console.log(result.join("\n"));
