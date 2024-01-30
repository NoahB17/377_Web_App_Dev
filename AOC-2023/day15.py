
def hash(s):
    value = 0
    for c in s:
        value += ord(c)
        value *= 17
        value = value%256
    return value
with open('day15.txt', 'r')as file:
    s = file.read().strip('\n')
    steps = s.split(',')

sumval = 0

for step in steps:
    sumval += hash(step)

print(sumval)