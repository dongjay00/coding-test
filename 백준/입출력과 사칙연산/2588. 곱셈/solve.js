const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const num1 = +inputData[0];
const num2 = inputData[1];

console.log(`${num1 * +num2[2]}
${num1 * +num2[1]}
${num1 * +num2[0]}
${num1 * +num2}`);
