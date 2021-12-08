def solution(mylist):
    return [abs(mylist[i] - mylist[i+1]) for i in range(len(mylist)-1)]