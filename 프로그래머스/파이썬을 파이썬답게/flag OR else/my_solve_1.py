mul = 1
for _ in range(5):
    mul *= int(input())

    if int(mul ** 0.5) ** 2 == mul:
        print("found")
        break
else:
    print("not found")