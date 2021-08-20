const fs = require("fs");
let inputData = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

if (inputData.length === 1 && inputData[0] === "") {
  inputData = [];
}

console.log(inputData.length);
