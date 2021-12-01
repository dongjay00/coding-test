from collections import defaultdict

def solution(clothes):
    clothMap = defaultdict(list);
    
    for i in range(len(clothes)):
        clothMap[clothes[i][1]].append(clothes[i][0])
    
    total = 1
    for v in clothMap.values():
        total *= (len(v) + 1)
    return total - 1