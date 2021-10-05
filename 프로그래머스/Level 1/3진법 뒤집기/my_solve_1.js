function solution(n) {
    let term = "";
    while (n > 0) {
        term += (n % 3).toString();
        n = Math.floor(n / 3)
    }
    
    let answer = 0
    for (let i = 0; i < term.length; i++) {
        answer += 3 ** (term.length - i - 1) * (+term[i]);
    }
    
    return answer;
}