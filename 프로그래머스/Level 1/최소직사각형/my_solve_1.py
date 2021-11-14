def solution(sizes):
    width, height = 0, 0
    for size in sizes:
        if size[0] < size[1]:
            size.sort(reverse=True)
        if size[0] > width:
            width = size[0]
        if size[1] > height:
            height = size[1]
    return width * height