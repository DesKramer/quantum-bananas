import requests
import json

class Connector:
    def checkStatus(self):
        r = requests.get(self.url)
        return r.status_code


    def getKitchens(self):
        r = requests.get(self.url);
        print(r.json())


    def postKitchen(self, objects):
       
        headers = {'Content-Type' : 'application/json'}
        isMessy = False

        if(len(objects) > 0):
            isMessy = True

        payload = {
            'kitchen' : "main_kitchen",
            'messy' : 'true',
            'objects' : objects,
            }
        r = requests.post(self.url, headers=headers, json=payload)
        print(r.status_code)

    def __init__(self):
        self.url = 'http://localhost:5000/kitchens/'
