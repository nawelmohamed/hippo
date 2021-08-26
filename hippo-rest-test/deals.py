import requests
import json
import sys
from endpoints import *

e = Endpoints("https://testing.pricestarz.com/hippo")

def get_all_deals():
    
    r = e.deals('gordana.vujovic@yoterra.com')    
    json_data = r.json()    
    totalPages = json_data['data']['totalPages']
    print(totalPages)
    for i in range(1,totalPages+1):
        response = e.deals('gordana.vujovic@yoterra.com', page=i)    
        json_data = response.json() 
        for v in json_data['data']['content']:
            _id = v['id']
            title = v['title']
            trackingUrl= v['trackingUrl']
            imageUrl= v['imageUrl']
            category= v['category']

            data_list = {
                'ID' : _id,
                'NAME' : title,
                'trackingUrl' : trackingUrl,
                'imageUrl' : imageUrl,
                'category' : category,
            }
            print (data_list)

            all_deals = "all_deals.json"
            with open(all_deals, 'a') as f:        
                f.write(json.dumps(data_list))
                f.write("\n")        
        
        

get_all_deals()
