import requests
import json
from endpoints import *

#Search for (get a page of) users
e = Endpoints('https://testing.pricestarz.com/hippo')
#e = Endpoints('http://localhost:8085')

def get_all_stores():    

    email = "gordana.vujovic@yoterra.com"
    response = e.stores(email, size=50)
    json_data = response.json()
    total_pages = json_data['data']['totalPages']
    print(total_pages)
    for i in range(1,total_pages+1):
        response = e.stores(email, page=i, size=50)
        json_data = response.json()     
   
        for v in json_data['data']['content']:
            s_id = v['id']
            name = v['name']
            print(name)
            domains = v['domains']
            logo = v['logo']
            oneClickCheckout = v['oneClickCheckout']
            verified = v['verified']
            productCount = v['productCount']
            likeCount = v['likeCount']
            commentCount = v['commentCount']
            followersCount = v['followersCount']
            
            data_list = {
                'ID' : s_id,
                'NAME' : name,  
                'DOMAINS' : domains,
                'logo' : logo,
                'oneClickCheckout' : oneClickCheckout,
                'verified' : verified,
                'productCount' : productCount,
                'likeCount' : likeCount,
                'commentCount' : commentCount,
                'followersCount' : followersCount                
              
            }

            all_stores = "all_stores.json"
            with open(all_stores, 'a') as f:        
                f.write(json.dumps(data_list))
                f.write("\n")        
        
        

get_all_stores()
