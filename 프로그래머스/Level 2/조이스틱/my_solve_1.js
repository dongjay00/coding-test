const changeName = (name, index, char) =>
  name.slice(0, index) + char + name.slice(index + 1);

const changeChar = (name, index) =>
  Math.min(name.charCodeAt(index) - 65, 91 - name.charCodeAt(index));

const solution = (name) => {
  let answer = 0;
  let len = name.length;
  let result = "A".repeat(len);
  let index = 0;

  while (result !== name) {
    let next = 0;
    let cnt = 0;
    while (cnt < len) {
      let left = (index + len - cnt) % len;
      let right = (index + cnt) % len;

      if (name[right] !== result[right]) next = right;
      else if (name[left] !== result[left]) next = left;
      else {
        cnt += 1;
        continue;
      }

      answer += cnt + changeChar(name, next);
      result = changeName(result, next, name[next]);
      break;
    }
    index = next;
  }

  return answer;
};
