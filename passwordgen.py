import random


SPECIALS="!@#$%^&*()_[]{}\|;,./:<>?"
password=[]
length = int(input('password length: '))

add_upper= input("upper? [y/n]")
if add_upper=="y":
    password.append(chr(ord('A')+random.randint(0,25)))
    length=length-1
    print(length)


add_lower= input("lower? [y/n]")
if add_lower=="y":
    password.append(chr(ord('a')+random.randint(0,25)))
    length=length-1
    print(length)


add_digit= input("digit? [y/n]")
if add_digit=="y":
    password.append(str(random.randint(1,9)))
    length=length-1
    print(length)


add_special= input("special? [y/n]")
if add_special=="y":
    password.append(SPECIALS[random.randint(0,len(SPECIALS)-1)])
    length-1
    print(length)

for i in range(length):
    somthing=random.randint(1,4)

    if somthing==1:
            
        digit=random.randint(1,9)
        password += str(digit)

    # for i in range(5):
    elif somthing==2: 
        letter=chr(ord('a')+random.randint(0,25))
        password += letter

    # for i in range(5):
    elif somthing==3:     
        letter=chr(ord('A')+random.randint(0,25))
        password += letter
    # for i in range(5):
    elif somthing==4:     
        special=SPECIALS[random.randint(0,len(SPECIALS)-1)]
        password += special


random.shuffle(password)
print(''.join(password))
