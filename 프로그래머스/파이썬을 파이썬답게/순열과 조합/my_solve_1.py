from itertools import permutations

def solution(mylist):
    return [v for v in sorted(list(permutations(mylist)))]