function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let sliced_array = array.slice(commands[i][0] - 1, commands[i][1]);
    sliced_array.sort(function (a, b) {
      return a - b;
    });
    answer.push(sliced_array[commands[i][2] - 1]);
  }
  return answer;
}
