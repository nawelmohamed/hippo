import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def categories_favorites_set():    
    categories_id = []
    users_emails = []
    email = "gordana.vujovic@yoterra.com"

    response = e.categories(email, size=50)
    json_data = response.json()
    
    totalPages = json_data['data']['totalPages']
    totalElements = json_data['data']['totalElements']
    
    for i in range(1,totalPages+1):
        response = e.categories(email, page=i, size=50)
        json_data = response.json()
        
        for v in json_data['data']['content']:
            cat_id = v['id']
            print(cat_id)
            categories_id.append(cat_id)
            
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(5, 11)
        user_favorites = random.sample(categories_id, i)
        print(user_favorites)
        for val in user_favorites:
            categories = val
            e.categories_favorites_set(email, categories)


categories_favorites_set()
