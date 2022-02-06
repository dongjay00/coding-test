def solution(citations):
    citations.sort(reverse=True)
    i = 0
    for c in citations:
        if c > i:
            i += 1
    return i