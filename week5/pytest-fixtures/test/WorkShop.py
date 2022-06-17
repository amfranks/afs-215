class WorkShop():
    # Can call Workshop
    # Can add Supplies with qnt
    # Can search supplies
    def __init__(self):
        self.supplies = {}

    def addSupplies(self, item, qnt):
        self.supplies[item] = qnt
        return self.supplies

    def searchSupplies(self, item):
        for eac in self.supplies:
            if eac == item:
                return True