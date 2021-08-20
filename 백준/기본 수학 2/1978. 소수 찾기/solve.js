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

const inputData = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +inputData[0];
const nums = inputData[1]
  .trim()
  .split(" ")
  .map((num) => +num);

let count = 0;
nums.forEach((num) => {
  if (isPrime(num)) count += 1;
});
console.log(count);
