import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def products_likes_add():    
    products_id = []
    users_emails = []
    email = "gordana.vujovic@yoterra.com"

    response = e.products(email, size=50)
    json_data = response.json()
    
    totalPages = json_data['data']['totalPages']
    totalElements = json_data['data']['totalElements']
    
    for i in range(1,20):
    #for i in range(1,totalPages+1):
        response = e.products(email, page=i, size=50)
        json_data = response.json()
        
        for v in json_data['data']['content']:
            deal_id = v['id']
            print(deal_id)
            products_id.append(deal_id)
            
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(30, 100)
        products_likes = random.sample(products_id, i)
        print(products_likes)
        for val in products_likes:
            _id = val
            e.products_likes_add(email, _id)


products_likes_add()
