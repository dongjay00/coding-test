def solution(d, budget):
    answer, term = 0, 0
    d.sort()
    for i in range(len(d)):
        term += d[i]
        if term > budget: break
        answer += 1
    return answer