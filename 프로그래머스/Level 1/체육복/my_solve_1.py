def solution(n, lost, reserve):
    real_res = set(reserve)-set(lost) 
    real_lost = set(lost)-set(reserve) 
    for num in real_res: 
        if num - 1 in real_lost: 
            real_lost.remove(num - 1) 
        elif num + 1 in real_lost: 
            real_lost.remove(num + 1) 
    return n - len(real_lost)