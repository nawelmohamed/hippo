import requests
from endpoints import *

#Add a new user - set basic info

e = Endpoints("https://testing.pricestarz.com/hippo")
#e = Endpoints("http://localhost:8085")
def register_users():
    
    users = open("users.txt","r")
    for line in users.readlines():
        fields = line.split(",")    
        #and let's extract the data:
        USERNAME = fields[0]
        FIRSTNAME = fields[1]
        LASTNAME = fields[2]
        EMAIL = fields[3].rstrip('\n')

        
        e.auth_register(EMAIL, USERNAME, FIRSTNAME, LASTNAME)


    users.close()
register_users()
