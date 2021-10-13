function solution(brown, yellow) {
  const divisors = (n) => {
    let arr = [];
    let arrReverse = [];

    for (let i = 1; i < Math.floor(n ** 0.5) + 1; i++) {
      if (n % i === 0) {
        arr.push(i);
        if (i !== parseInt(n / i)) {
          arrReverse.push(parseInt(n / i));
        }
      }
    }
    arr = arr.reverse();
    return arrReverse.concat(arr);
  };
  let answer = [];
  const size = brown + yellow;
  const d = divisors(size);

  for (let i = 0; i < d.length; i++) {
    if ((d[i] - 2) * (d[d.length - 1 - i] - 2) === yellow) {
      answer = [d[i], d[d.length - 1 - i]];
      break;
    }
  }

  return answer;
}
