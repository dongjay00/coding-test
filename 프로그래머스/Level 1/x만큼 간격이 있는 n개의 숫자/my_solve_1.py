def solution(x, n):
    answer = []
    cnt = 1
    for _ in range(n):
        answer.append(x * cnt)
        cnt += 1
    return answer