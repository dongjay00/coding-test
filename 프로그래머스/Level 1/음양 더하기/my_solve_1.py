def solution(absolutes, signs):
    answer = 0
    for i in range(len(signs)):
        answer = answer + absolutes[i] if signs[i] else answer - absolutes[i]
    return answer