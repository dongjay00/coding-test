from itertools import chain

def solution(mylist):
    return list(chain(*mylist))