file = open('day1.txt', 'r')
lines = file.readlines()
total = 0
highest=0
second=0
third=0
for line in lines:
    line=line.strip()

    if line=='':
        print('New Elf')
        print('last elf was carrying'+ str(total))
        if total>highest:
            highest=total
        
        total=0
    else:
        total+= int(line)

print('last elf was carrying'+ str(total))

print(highest)