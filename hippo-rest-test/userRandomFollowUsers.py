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
    
    follows = []    
    for nu in range(len(users_id)-1):
        user_follow = []
        i = randrange(0, len(users_id)-1)
        indexes = list(range(len(users_id)-1))
        indexes.remove(nu)

        while len(user_follow) < i:     
            j = random.choice(indexes)
            user_follow.append(users_id[j])
            indexes.remove(j)
            
        follows.append(user_follow)
    
    users_random_follow(users_id,users_emails,follows)
    
def users_random_follow(users_id,users_emails,follows):
    
    for i in range(len(users_id)-1):
        eMail = users_emails[i]
        
        

        for val in follows[i]:
            _id = val
            e.users_follow(eMail, _id)

get_users_id()
