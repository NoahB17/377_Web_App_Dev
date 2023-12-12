file = open('day1.txt', 'r')
lines = file.readlines()

total=0
for line in lines:
    first_digit=''
    for c in line:
        if c.isdigit():                
            first_digit=c
            break
    
    last_digit=''
    reversed = line[::-1]
    for c in reversed:
        if c.isdigit():
            last_digit=c
            break
    print(first_digit+last_digit)
    total+=int(first_digit+last_digit)
print(total)

