file = open('day3.txt', 'r')
lines = file.readlines()
total=0
for line in lines:
    line = line.strip()

    length=len(line)

    compartment_1 = line[:length // 2]
    compartment_2 = line[length//2:length]


    
    print(line)
    print(compartment_1)

    for letter in compartment_1:
        if letter in compartment_2:
            print("found duplicate "+ letter)
            if ord(letter)<96:
                value=ord(letter)-64+26
            else:
                 value=ord(letter)-96

            total+=value
            break
print(total)
