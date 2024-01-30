import smtplib
from email.message import EmailMessage
file = open('gifts.csv', 'r')
password = open('password.txt','r').readline().strip()
lines = file.readlines()

for line in lines:
    line=line.strip()
    name, gift, email = line.split(',')
    subject = 'thank you for the gift'

    message = 'Dear ' + name + 'Thank you for the ' + gift + '.'
    print(message)

    msg= EmailMessage()
    msg.set_content(message)
    msg['Subject']=subject
    msg['From']='nbalewicz24@hanoverstudents.org'
    msg['To']= email

    with smtplib.SMTP_SSL('smtp.gmail.com',465) as server:
        print('Authenticating...')
        server.login('nbalewicz@gmail.com',password)
        print('Sending...')
        server.send_message(msg)
        server.quit()
        print('Message Sent')