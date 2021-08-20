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

const [M, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

const nums = [];
for (let i = M; i <= N; i++) {
  if (isPrime(i)) nums.push(i);
}
console.log(nums.join("\n"));
