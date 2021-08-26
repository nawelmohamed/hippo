import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def users_follow_collections():    
    collections_id = []
    users_emails = []
    email = "gordana.vujovic@yoterra.com"

    response = e.collections(email, size=50)
    json_data = response.json()
    
    totalPages = json_data['data']['totalPages']
    totalElements = json_data['data']['totalElements']
    
    for i in range(1,totalPages+1):
        response = e.collections(email, page=i, size=50)
        json_data = response.json()
        
        for v in json_data['data']['content']:
            collection_id = v['id']
            print(collection_id)
            collections_id.append(collection_id)
            
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(5, 20)
        user_follow = random.sample(collections_id, i)
        print(user_follow)
        for val in user_follow:
            _id = val
            e.collections_follow(email, _id)


users_follow_collections()
