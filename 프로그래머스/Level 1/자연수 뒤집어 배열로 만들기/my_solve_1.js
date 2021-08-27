function solution(n) {
    var answer = [];
    const numN = n.toString();
    for (let i = numN.length - 1; i >= 0; i--) {
        answer.push(+numN[i])
    }
    return answer;
}