const fs = require("fs");
const firstNum = fs.readFileSync("/dev/stdin").toString();

function addZero(num) {
  return "0" + (+num).toString();
}

let currNum = firstNum;
let cnt = 1;
while (true) {
  if (+currNum < 10) {
    currNum = addZero(currNum);
  }
  let sumNum = (+currNum[0] + +currNum[1]).toString();
  if (+sumNum < 10) {
    sumNum = addZero(sumNum);
  }
  let newNum = currNum[1] + sumNum[1];
  if (+newNum === +firstNum) {
    console.log(cnt);
    break;
  } else {
    currNum = newNum;
  }
  cnt += 1;
}
