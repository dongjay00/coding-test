const isPrimeNumber = (n) => {
  for (let i = 2; n > i; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const perm = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((el, idx, arr) => {
    const fixer = el;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = perm(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((el) => [fixer, ...el]);
    result.push(...combineFixer);
  });
  return result;
};

const solution = (numbers) => {
  let answer = 0;
  const arr = numbers.split("");
  const set = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const result = perm(arr, i).map((res) => +res.join(""));
    result.forEach((res) => {
      if (!set.has(res)) {
        set.add(res);
        answer += isPrimeNumber(res) ? 1 : 0;
      }
    });
  }

  return answer;
};
