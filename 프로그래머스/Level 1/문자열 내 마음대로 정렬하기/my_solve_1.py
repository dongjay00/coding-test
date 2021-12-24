from operator import itemgetter

def solution(strings, n):
    return sorted(sorted(strings), key=itemgetter(n))