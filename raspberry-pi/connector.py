import requests

class Connector:
    def checkConnection(self):
        r = requests.get(self.url)
        return r.status_code

    def postAlert(self, objects):
        print("")
        # Requires endpoint to post to

        isMessy = False


        if(len(objects) > 0):
            isMessy = True


        payload = {
            'kitchen' : 'main_kitchen',
            'messy' : isMessy,
            'objects' : objects,
            }
        r = requests.post(url+'api/alerts', data=payload)



    def __init__(self):
        self.url = 'http://localhost:5000/'


con = Connector()
print(con.checkConnection())