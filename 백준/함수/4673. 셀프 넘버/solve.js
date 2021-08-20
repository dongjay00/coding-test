function d(n) {
  strNum = n.toString();
  sumDigit = 0;
  for (let i = 0; i < strNum.length; i++) {
    sumDigit += +strNum[i];
  }
  return n + sumDigit;
}

function range(start, end) {
  const arr = [];
  const length = end - start;
  for (let i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }
  return arr;
}

const nums = range(1, 10000);
for (let i = 0; i < 10000; i++) {
  let madeNum = d(i);
  if (nums.includes(madeNum)) nums.splice(nums.indexOf(madeNum), 1);
}

console.log(nums.join("\n"));
