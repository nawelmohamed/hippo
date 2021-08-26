import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def collections_deals_add():    
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n')
        response = e.active_profile(email)
        json_data = response.json()
        username = json_data['data']['username']
        print(username)  
        
        response = e.collections(email, size=50)
        json_data = response.json()
    
        totalPages = json_data['data']['totalPages']
        totalElements = json_data['data']['totalElements']
    
        for i in range(1,totalPages+1):
            response = e.collections(email, page=i, size=50)
            json_data = response.json()
            
            for v in json_data['data']['content']:
                if v['type'] == "PRODUCT":
                    cid = v['id']
                    collection_name = v['name']
                    owner = v['owner']['username']
                    if owner == username:
                        #collections_id.append(collection_id)
                        print(collection_name)
                        products_id = []
                        response = e.products(email,q=collection_name, size=50)
                        json_data = response.json()
                        totalElements = json_data['data']['totalElements']
                        totalPages = json_data['data']['totalPages']
                        for j in range(1,5):
                            response = e.products(email,q=collection_name, page=j, size=50)
                            json_data = response.json()
                            for v in json_data['data']['content']:
                                product_id = v['id']
                                products_id.append(product_id)
                        print(len(products_id))
                        if len(products_id) > 0:
                            i = randrange(1, len(products_id))
                            add_products = random.sample(products_id, i)
                            print(add_products)
                        for val in add_products:
                            iid = val
                            e.collections_products_add(email, cid,iid)   
                        

collections_deals_add()
