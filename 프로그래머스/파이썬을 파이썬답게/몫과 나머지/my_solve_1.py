import sys

a, b = map(int, sys.stdin.readline().strip().split(' '))
print(a // b, a % b)

'''
무조건 divmod를 사용하는 게 좋은 방법은 아닙니다.
가독성이나, 팀의 코드 스타일에 따라서, a//b, a%b와 같이 쓸 때가 더 좋을 수도 있습니다.
또한, divmod는 작은 숫자를 다룰 때는 a//b, a%b 보다 느립니다. 대신, 큰 숫자를 다룰 때는 전자가 후자보다 더 빠르지요.
'''