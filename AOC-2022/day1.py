file = open('day1.txt', 'r')
lines = file.readlines()
total = 0
totals=[]
for line in lines:
    line=line.strip()

    if line=='':
        print('New Elf')
        print('last elf was carrying'+ str(total))
        totals.append(total)
        total=0
        
    else:
        total+= int(line)
print('New Elf')
print('last elf was carrying'+ str(total))
totals.append(total)
totals.sort(reverse=True)
print("top 3: "+str(totals[0] + totals[1] + totals[2]))