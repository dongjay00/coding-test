function solution(s) {
  const expand = (left, right) => {
    while (left >= 0 && right <= s.length && s[left] == s[right - 1]) {
      left -= 1;
      right += 1;
    }
    return s.slice(left + 1, right - 1);
  };

  const find_longest_word = (arr) => {
    let eachLength = arr.map((x) => x.length);
    let maxNum = Math.max(...eachLength);
    let where = eachLength.indexOf(maxNum);
    return arr[where];
  };

  if (s.length < 2 || s === s.split("").reverse().join("")) return s.length;

  let answer = "";

  for (let i = 0; i < s.length - 1; i++) {
    answer = find_longest_word([answer, expand(i, i + 1), expand(i, i + 2)]);
  }

  return answer.length;
}
