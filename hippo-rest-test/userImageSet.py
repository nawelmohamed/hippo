import requests
#email = "gordana.vujovic@yoterra.com"

coll = open("collections.txt","r").read().splitlines()
images = open("images.txt","r").read().splitlines()    
for line in images:

    fields = line.split(",")

    email = fields[0]
    path = fields[1]
    headers = {
        'accept': '*/*',
        'hippo-api-version': '1.0.0',
        'Authorization': f"Bearer testtoken:{email}",
    }



    files = {
        'file': (path, open(path, 'rb')),
    }


    response = requests.post('https://testing.pricestarz.com/hippo/user/image/set', headers=headers, files=files)
