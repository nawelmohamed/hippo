import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def stores_favorites_set():    
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
        i = randrange(5, 11)
        user_favorites = random.sample(stores_id, i)
        print(user_favorites)
        for val in user_favorites:
            stores = val
            e.stores_favorites_set(email, stores)


stores_favorites_set()
