def fibonacci_sum(limit):
    a = 1
    b = 2
    total_sum = 0

    while a <= limit:
        if a % 2 == 0:
            total_sum += a
        a, b = b, a + b

    return total_sum

limit = 4000000
result = fibonacci_sum(limit)
print(result)