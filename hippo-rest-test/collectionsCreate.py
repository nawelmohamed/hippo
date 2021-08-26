from endpoints import *
import requests
import random
from random import randrange

e = Endpoints('https://testing.pricestarz.com/hippo')
emails = open("emails.txt","r")
for line in emails.readlines():
    EMAIL = line.rstrip('\n')
    
    coll = open("collections.txt","r").read().splitlines()

    print(EMAIL)
    i = randrange(0, 15)
    j = 0
    while j < i:
        line = random.choice(coll)
        coll.remove(line)
        fields = line.split(",")

        TYPE = fields[0]
        NAME = fields[1]
        DESCRIPTION = fields[2].rstrip('\n')
        print(DESCRIPTION)
        j = j + 1
        print(j)
        e.collections_create(EMAIL, TYPE, NAME, DESCRIPTION)
                                     
        
                                     
