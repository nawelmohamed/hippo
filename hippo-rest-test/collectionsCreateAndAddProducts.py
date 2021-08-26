import requests
import json
import sys
import random
from random import randrange
from endpoints import *

#e = Endpoints('http://localhost:8085')
e = Endpoints('https://testing.pricestarz.com/hippo')

def create_collections_and_add_products():
    
    stores_id = []
    response = e.stores('gordana.vujovic@yoterra.com', size=50)
    json_data = response.json()

    totalPages = json_data['data']['totalPages']
    for i in range(1,totalPages+1):
        response = e.stores('gordana.vujovic@yoterra.com', page=i, size=50)
        json_data = response.json()

        for v in json_data['data']['content']:        
            _id = v['id']
            productCount = v['productCount']
            if productCount > 250:            
                stores_id.append(_id) 
                print(_id)
    print(stores_id)
    emails = open("emails.txt","r")
    for line in emails.readlines():
        email = line.rstrip('\n')
        print(email)
        i = randrange(3, 6)
        add_collections = random.sample(stores_id, i)
        print(add_collections)
        for val in add_collections:
            response = e.stores_get(email, _id=val)
            json_data = response.json()
            if json_data['status'] == 'SUCCESS':
                
                collection_name = json_data['data']['name']
            #else :
                #add_collections.remove(val)
            #print(add_collections)
            

                print(collection_name)
                r = e.collections_create(email, _type='PRODUCT', name=collection_name, description='store collections')
                json_data = r.json()
                cid = json_data['data']['id']
                products_id = []
                response = e.products(email, storeId=val, size=50)
                json_data = response.json()


                for j in range(1,6):
                    response = e.products(email, storeId=val, page=j, size=50)
                    json_data = response.json()
                    for v in json_data['data']['content']:
                        product_id = v['id']
                        products_id.append(product_id)
                print(len(products_id))
                i = randrange(7, 15)
                add_products = random.sample(products_id, i)
                print(add_products)
                for val in add_products:
                    iid = val
                    e.collections_products_add(email, cid,iid)
            
            
            
            
            
            


create_collections_and_add_products()
