num = int(input().strip())
print("".join([chr(i) for i in range(97, 123)]) if num == 0 else "".join([chr(i) for i in range(65, 91)]))