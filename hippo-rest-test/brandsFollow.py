import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def users_follow_brands():    
    brands_id = []
    users_emails = []
    email = "gordana.vujovic@yoterra.com"

    response = e.brands(email, size=50)
    json_data = response.json()
    
    totalPages = json_data['data']['totalPages']
    totalElements = json_data['data']['totalElements']
    
    for i in range(1,totalPages+1):
        response = e.brands(email, page=i, size=50)
        json_data = response.json()
        
        for v in json_data['data']['content']:
            brand_id = v['id']
            print(brand_id)
            brands_id.append(brand_id)
            
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n') 
        i = randrange(15, 100)
        user_follow = random.sample(brands_id, i)
        print(user_follow)
        for val in user_follow:
            _id = val
            e.brands_follow(email, _id)


users_follow_brands()
