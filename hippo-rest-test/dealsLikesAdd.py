import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def deals_likes_add():    
    deals_id = []
    users_emails = []
    email = "gordana.vujovic@yoterra.com"

    response = e.deals(email, size=50)
    json_data = response.json()
    
    totalPages = json_data['data']['totalPages']
    totalElements = json_data['data']['totalElements']
    
    for i in range(1,totalPages+1):
        response = e.deals(email, page=i, size=50)
        json_data = response.json()
        
        for v in json_data['data']['content']:
            deal_id = v['id']
            print(deal_id)
            deals_id.append(deal_id)
            
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(15, 100)
        deals_likes = random.sample(deals_id, i)
        print(deals_likes)
        for val in deals_likes:
            _id = val
            e.deals_likes_add(email, _id)


deals_likes_add()
