import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def stores_likes_add():    
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
            
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(15, 100)
        stores_likes = random.sample(stores_id, i)
        print(stores_likes)
        for val in stores_likes:
            _id = val
            e.stores_likes_add(email, _id)


stores_likes_add()
