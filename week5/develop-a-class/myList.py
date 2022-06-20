class myList:
    def __init__(self):
        self.myList = []

    # Place a string into a list.
    def placeStringIntoList(self, string):
        self.myList.append(string)
        return self.myList

    # Search the list for a single instance of a string.
    def searchList(self, str):
        if str in self.myList:
            return True
        else:
            return False

    # Evaluate all items in the list.
    def evaluateListItems(self):
        newArr = []
        for i in range(0, len(self.myList)):
            newArr.append(eval(self.myList[i]))
            
        return newArr