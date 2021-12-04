const solution = (answers) => {
  const pick = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const solved = Array(pick.length).fill(0);

  answers.forEach((answer, index) => {
    pick.forEach((v, i) => {
      if (answer === v[index % v.length]) solved[i] += 1;
    });
  });

  const result = [];
  solved.forEach((v, i) => {
    if (v === Math.max(...solved)) result.push(i + 1);
  });

  return result;
};
