import pytest

from myList import myList

# def testCanPlaceStringIntoList():
#     newList = myList()
#     newList.placeStringIntoList('1')
#     newList.placeStringIntoList('2')
#     newList.placeStringIntoList('3')
#     assert newList.placeStringIntoList('4') == ['1', '2', '3', '4']

# def testCanSearchList():
#     newList = myList()
#     newList.placeStringIntoList('1')
#     newList.placeStringIntoList('2')
#     newList.placeStringIntoList('3')
#     newList.placeStringIntoList('4')
#     assert newList.searchList('4') == True

# def testCanEvaluateListItems():  
#     newList = myList()
#     newList.evaluateListItems()
#     newList.placeStringIntoList('1')
#     newList.placeStringIntoList('2')
#     newList.placeStringIntoList('3')
#     newList.placeStringIntoList('4')
#     assert newList.evaluateListItems() == [1, 2, 3, 4]

@pytest.fixture()
def newList():
    newList = myList()
    newList.placeStringIntoList('1')
    newList.placeStringIntoList('2')
    newList.placeStringIntoList('3')
    return newList

def testCanPlaceStringIntoList(newList):
    assert newList.placeStringIntoList('4') == ['1', '2', '3', '4']

def testCanSearchList(newList):
    assert newList.searchList('3') == True

def testCantSearchList(newList):
    assert newList.searchList('5') == False

def testCanEvaluateListItems(newList):  
    assert newList.evaluateListItems() == [1, 2, 3]