const R = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const Euclid = R ** 2 * Math.PI;
const Taxi = R ** 2 * 2;

console.log(Euclid.toFixed(6));
console.log(Taxi.toFixed(6));
