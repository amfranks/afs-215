# import json

class Ditches:
    def __init__(self):
        self.order = []

    # def connect(self, dataFile):
    #     with open(dataFile) as jsonFile:
    #         self.order = json.load(jsonFile)

    # def getData(self, name):
    #     for ditch in self.order['ditches']:
    #         if ditch['name'] == name:
    #             return ditch

    def addDitch(self, ditchName):
        self.order.append(ditchName)
        return self.order

    def searchDitch(self):
        return self.order

    def findDitch(self, ditchName):
        if ditchName in self.order:
            return True

class Location:
    def __init__(self):
        pass

