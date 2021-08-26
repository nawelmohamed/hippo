import requests
import json
import random
from random import randrange
from endpoints import *

e = Endpoints("https://testing.pricestarz.com/hippo")
#e = Endpoints("http://localhost:8085")

def get_users_id():
    #Get users id's
    users_id = []
    users_emails = []
    emails = open("emails.txt","r")
    
    for line in emails.readlines():
        email = line.rstrip('\n')        
        response = e.user_profile(email)        
        json_data = response.json()
        user_id = json_data['data']['id']
        users_id.append(user_id)
        users_emails.append(email)  
    print(users_id)
    print(users_emails)

    follows = users_id
    for nu in range(len(users_id)):
        eMail = users_emails[nu]
        u_id  = users_id[nu]
        print(eMail)
    
        
        for val in follows:
            if val != u_id:
                
                _id = val
                print(_id)
                e.users_follow(eMail, _id)
                

get_users_id()
