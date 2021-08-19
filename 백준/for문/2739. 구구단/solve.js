const fs = require("fs");
const inputData = Number(fs.readFileSync("/dev/stdin").toString());

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.forEach((num) => {
  console.log(`${inputData} * ${num} = ${inputData * num}`);
});
