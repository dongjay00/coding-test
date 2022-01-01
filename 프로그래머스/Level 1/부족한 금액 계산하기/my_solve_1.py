def solution(price, money, count):
    total = price * (count * (count + 1) / 2)
    return 0 if money >= total else total - money