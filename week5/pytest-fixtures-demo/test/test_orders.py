import pytest 

from orders import Ditches

@pytest.fixture()
def order():
    order = Ditches()
    # db = Ditches()
    # db.connect('data.json')
    # return db
    order.addDitch('South Main Drain')
    order.addDitch('Curry Drain')
    order.addDitch('Trenton Drain')
    return order

# def testDitchNameIsCorrect(db):
#     dbName = db.getData('Trenton Drain')
#     assert dbName['id'] == 3
#     assert dbName['name'] == 'Trenton Drain'
#     assert dbName['owen'] == False

def testCanPlaceDitches(order):
    assert order.addDitch('Alamo Side') == ['South Main Drain', 'Curry Drain', 'Trenton Drain', 'Alamo Side']

def testCanCheckCurrentOrder(order):
    assert order.searchDitch() == ['South Main Drain', 'Curry Drain', 'Trenton Drain']

def testCanFindSpecificItem(order):
    assert order.findDitch('Trenton Drain') == True