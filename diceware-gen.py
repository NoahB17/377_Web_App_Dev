word_lookup={}
import random

#step 1: load all the words into a dictionary by theiur codes
password=''

file = open('diceware-wordlist.txt', 'r')
lines = file.readlines()
for line in lines:
    if line[0].isdigit():
        code,word=line.split()
        word_lookup[code] = word

#step 2:generate random code
word_num = int(input('number of words: '))
for j in range (word_num):
    code=''
    for i in range(5):
        digit = random.randint(1,6)
        code+=str(digit)
    password+=word_lookup[code]+" "
print(password) 