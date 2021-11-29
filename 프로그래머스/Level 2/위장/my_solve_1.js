function solution(clothes) {
  let clothMap = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothMap[clothes[i][1]]) {
      clothMap[clothes[i][1]].push(clothes[i][0]);
    } else {
      clothMap[clothes[i][1]] = [clothes[i][0]];
    }
  }

  let total = 1;
  Object.values(clothMap).forEach((item) => (total *= item.length + 1));
  return total - 1;
}
