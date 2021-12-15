from collections import Counter

my_str = input().strip()
counts = Counter(my_str).most_common()
counts.sort(key=lambda x: (-x[1], x[0]))

max_count = counts[0][1]
answer = ""
for count in counts:
    if count[1] == max_count:
        answer += count[0]

print(answer)