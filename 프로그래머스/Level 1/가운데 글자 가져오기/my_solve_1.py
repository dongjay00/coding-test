def solution(s):
    length = len(s)
    answer = s[length // 2 - 1: length // 2 + 1]
    if length % 2:
        answer = s[length // 2]
    return answer