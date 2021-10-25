function solution(array, commands) {
  return commands.map((command) => {
    const [s, e, p] = command;
    return array.slice(s - 1, e).sort((x, y) => x - y)[p - 1];
  });
}
