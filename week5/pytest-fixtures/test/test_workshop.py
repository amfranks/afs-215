import pytest 
from WorkShop import WorkShop

# Can call WorkShop
# Can add supplies with qnt
# Can search supplies

# Arrange
# Setup everything before the test runs

@pytest.fixture
def workshop():
  workshop = WorkShop()
  return workshop

# Arrange
#
# Act
#
# Assert
#
# Cleanup

def testCanCallWorkBench():
    WorkShop()

def testCanAddSuppliesAndAmounts(workshop):
    assert workshop.addSupplies('sandpaper', 3) == {'sandpaper': 3}

def testCanAddMultipleSuppliesAndAmounts(workshop):
    # Act
    workshop.addSupplies('planks', 5)
    # Assert
    assert workshop.addSupplies('nails', 16) == {'planks': 5, 'nails': 16}

def testCanSearchSupplies(workshop):
    workshop.addSupplies('nails', 16)
    assert workshop.searchSupplies('nails') == True

def testCanSearchForMultipleSupplies(workshop):
    workshop.addSupplies('nails', 16)
    workshop.addSupplies('hammer', 16)
    assert workshop.searchSupplies('hammer') == True