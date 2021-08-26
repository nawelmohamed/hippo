import requests
import json
import sys
import random
from random import randrange
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def get_collections_deals():    
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
            if v['type'] == "DEAL":
                collection_id = v['id']            
                collections_id.append(collection_id)
                
    print(collections_id)

    for val in collections_id:
        print(val)
        _id = val
        response = e.collections_deals("gordana.vujovic@yoterra.com", _id)
        print(response.content)

get_collections_deals()
