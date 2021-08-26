import requests
import json
import sys
from endpoints import *

e = Endpoints("https://testing.pricestarz.com/hippo")

def get_collections():    

    
    
    response = e.collections('gordana.vujovic@yoterra.com')    
    json_data = response.json()    
    totalPages = json_data['data']['totalPages']
    print(totalPages)
    for i in range(totalPages+1):
        response = e.collections('gordana.vujovic@yoterra.com', ownerId=102, page=i)    
        json_data = response.json() 
        for v in json_data['data']['content']:
            image = v['image']
            c_id = v['id']
            name = v['name']
            description= v['name']
            itemCount= v['itemCount']
            likeCount= v['likeCount']
            commentCount= v['commentCount']
            followersCount= v['followersCount']
            owner = v['owner']['username']
            data_list = {
                'ID' : c_id,
                'NAME' : name,
                'description' : description,
                'owner' : owner,
                'image' : image,
                'itemCount' : itemCount,
                'likeCount' : likeCount,
                'commentCount' : commentCount,
                'followersCount' : followersCount,
            }
            print (data_list)

            all_collections = "user_collections.json"
            with open(all_collections, 'a') as f:        
                f.write(json.dumps(data_list))
                f.write("\n")        
        
        

get_collections()
