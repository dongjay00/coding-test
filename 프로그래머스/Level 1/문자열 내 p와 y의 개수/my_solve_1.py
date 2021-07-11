from collections import Counter

def solution(s):
    answer = True
    chars = Counter(list(s.lower()))
    if chars['p'] != chars['y']:
        answer = False
    return answer