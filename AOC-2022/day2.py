file = open('day2.txt', 'r')
lines = file.readlines()
total=0
for line in lines:

    throws=line.strip().split(' ')
    print(throws[0] + ' vs ' + throws[1])

    #add to the total based on the throws
    
    #first get points based on my throw
    if throws[1]=='X':
        throws[1]='A'
        total+= 1
            
    elif throws[1]=='Y':
        throws[1]='B'
        total+= 2

    else:
        throws[1]='C'
        total+= 3


    #second get points based on result
    #we only care about win or tie

    if (throws[0]=='A' and throws[1]=='B') or \
    (throws[0]=='C' and throws[1]=='A') or \
    (throws[0]=='B' and throws[1]=='C'):
        total+=6
    elif throws[0]==throws[1]:
        total+= 3

    print(total)