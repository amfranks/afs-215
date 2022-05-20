class MakeAList:
    def __init__(self, list=[]):
        self.list = list

    def addItemToList(self, item):
        self.list.append(item)
        return list

    def convert(self, list):
        return tuple(list)

    def __str__(self):
        return f"{self.list}"

make_list = MakeAList()

myList = [45, "Hello World!", {"key": "value"}, (1, 2, 3)]

make_list.addItemToList(45)
make_list.addItemToList("Hello World!")
make_list.addItemToList({"key": "value"})
make_list.addItemToList((1, 2, 3))

print(make_list)

myList = make_list.convert(myList)

print(myList)