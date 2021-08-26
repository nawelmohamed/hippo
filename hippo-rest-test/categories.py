import requests
import json
import sys
from endpoints import *

e = Endpoints('https://testing.pricestarz.com/hippo')

def get_categories():    

    email = "gordana.vujovic@yoterra.com"
    
    response = e.categories(email, size=50)
    
    json_data = response.json()
    totalPages = json_data['data']['totalPages']
    
    for i in range(1,totalPages+1):
        response = e.categories(email, page=i, size=50)
        for v in json_data['data']['content']:
            data_id = v['id']
            for t in v['tuple']:
                name = t['name']
            #name = v['tuple']['name']
            ##print (user_id, ",", username)

            data_list = {
                'ID' : data_id,
                'NAME' : name,  
            }

            all_categories = "all_categories.json"
            with open(all_categories, 'a') as f:        
                f.write(json.dumps(data_list))
                f.write("\n")        
        
        

get_categories()
