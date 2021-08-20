let sugar = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let boxes = 0;

while (true) {
  if (sugar % 5 === 0) {
    console.log(sugar / 5 + boxes);
    break;
  } else if (sugar <= 0) {
    console.log(-1);
    break;
  }
  sugar -= 3;
  boxes++;
}
