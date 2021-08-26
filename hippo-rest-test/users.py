import requests
import json
import sys
from endpoints import *

e = Endpoints("https://testing.pricestarz.com/hippo")
#e = Endpoints("http://localhost:8085")

def get_all_users():
    
    response = e.users('gordana.vujovic@yoterra.com')    
    json_data = response.json()    
    totalPages = json_data['data']['totalPages']

    for i in range(1,totalPages+1):
        response = e.users('gordana.vujovic@yoterra.com', page=i)    
        json_data = response.json() 
        for v in json_data['data']['content']:
            user_id = v['id']
            username = v['username']
            firstName = v['firstName']
            lastName = v['lastName']
            avatar = v['avatar']
            followersCount = v['followersCount']
            followingCount = v['followingCount']
            collectionsCount = v['collectionsCount']
            likesMadeCount = v['likesMadeCount']
            commentsWrittenCount = v['commentsWrittenCount']

            users_data = {
                'ID' : user_id,
                'USERNAME' : username,  
                'FIRSTNAME' : firstName,                
                'LASTNAME' :  lastName,
                'avatar' :  avatar,
                'followersCount' :  followersCount,
                'followingCount' :  followingCount,
                'collectionsCount' :  collectionsCount,
                'likesMadeCount' :  likesMadeCount,
                'commentsWrittenCount' :  commentsWrittenCount,
            }
            print (users_data)

            all_collections = "all_users.json"
            with open(all_collections, 'a') as f:        
                f.write(json.dumps(users_data))
                f.write("\n")        
        
        

get_all_users()

