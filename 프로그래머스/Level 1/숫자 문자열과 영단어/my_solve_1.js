function solution(s) {
  const numDict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let answer = "";
  let words = "";
  for (let char of s) {
    if (!isNaN(char)) answer += char;
    else words += char;
    if (words in numDict) {
      answer += numDict[words];
      words = "";
    }
  }
  return +answer;
}
