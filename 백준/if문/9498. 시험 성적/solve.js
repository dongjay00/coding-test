const fs = require("fs");
const inputData = Number(fs.readFileSync("/dev/stdin").toString());

if (inputData >= 90) {
  console.log("A");
} else if (inputData >= 80) {
  console.log("B");
} else if (inputData >= 70) {
  console.log("C");
} else if (inputData >= 60) {
  console.log("D");
} else {
  console.log("F");
}
