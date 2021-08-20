const croatian = require("fs").readFileSync("/dev/stdin").toString().trim();

// let i = croatian.length - 1;
// const chars = [];
// while (i > -1) {
//   let char = croatian[i];
//   switch (char) {
//     case "=":
//       if (i !== 1 && croatian[i - 1] === "z" && croatian[i - 2] === "d") {
//         i -= 3;
//       } else {
//         i -= 2;
//       }
//       break;
//     case "-":
//       i -= 2;
//       break;
//     case "j":
//       if (i !== 0 && (croatian[i - 1] === "l" || croatian[i - 1] === "n")) {
//         i -= 2;
//       } else {
//         i -= 1;
//       }
//       break;
//     default:
//       i -= 1;
//   }
//   chars.push(0);
// }
// console.log(chars.length);

const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = croatian.replace(regex, " ");

console.log(result.length);
