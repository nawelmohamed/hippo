import requests
import json
import sys

class EndpointsChecked:

    endpoints = new Endpoints()             # instantiate the Endpoints class from the other file 

    def checkNotEmpty(paramName, param)
        if(param != None or param != '' ...)
            raise RequiredArgError (paramName + " is required.")

    #Checked Endpoint /active/profile/update, Update current user basic info.
    def active_profile_update(self, email, firstName, lastName, phoneNumber):
        
        self.checkNotEmpty("firstName", firstName)       # check only the requred params

        response = endpoints.active_profile_update(email, firstName, lastName, phoneNumber)
        return response

