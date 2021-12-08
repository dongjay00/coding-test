def solution(mylist):
    answer = [[] for _ in range(len(mylist))]

    for i in range(len(mylist)):
        for j in range(len(mylist[i])):
            answer[i].append(mylist[j][i])
    return answer