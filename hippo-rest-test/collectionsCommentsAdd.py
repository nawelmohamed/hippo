import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def collections_comments_add():    
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
    comm = ['good','excellent','great','very good','interesting','fantastic','great','not bad','Excellent', 'Wow!', 'Nice', 'Wonderful', 'impressive', 'This is very good', 'This is beautiful!', 'Great', 'I love this!', 'best', 'great ideas!']
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(5, 20)
        user_comments = random.sample(collections_id, i)
        print(user_comments)
        for val in user_comments:
            _id = val
            text = random.choice(comm)
            print(text)
            e.collections_comments_add(email, _id, text)


collections_comments_add()
