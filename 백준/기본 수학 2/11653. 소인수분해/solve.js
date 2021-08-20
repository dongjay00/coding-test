let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let i = 2;
let nums = [];
if (N !== 1) {
  while (N !== 1) {
    if (N % i === 0) {
      N /= i;
      nums.push(i.toString());
    } else {
      i++;
    }
  }
}
console.log(nums.join("\n"));
