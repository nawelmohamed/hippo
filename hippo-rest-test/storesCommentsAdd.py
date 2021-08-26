import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def stores_comments_add():    
    stores_id = []
    users_emails = []
    email = "gordana.vujovic@yoterra.com"

    response = e.stores(email, size=50)
    json_data = response.json()
    
    totalPages = json_data['data']['totalPages']
    totalElements = json_data['data']['totalElements']
    
    for i in range(1,totalPages+1):
        response = e.stores(email, page=i, size=50)
        json_data = response.json()
        
        for v in json_data['data']['content']:
            store_id = v['id']
            print(store_id)
            stores_id.append(store_id)
    comm = ['good','excellent','great','very good','interesting','fantastic','great','not bad','Excellent', 'Wow!', 'Nice', 'Wonderful', 'impressive', 'This is very good', 'This is beautiful!', 'Great', 'I love this!', 'best', 'great ideas!']
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(30, 100)
        user_comments = random.sample(stores_id, i)
        print(user_comments)
        for val in user_comments:
            _id = val
            text = random.choice(comm)
            print(text)
            e.stores_comments_add(email, _id, text)


stores_comments_add()
