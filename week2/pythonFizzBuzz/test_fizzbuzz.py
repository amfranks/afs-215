from fizzbuzz import pepsi_coke

def test_pepsi_coke():
    pepsi_coke()

def test_return_1():
    assert pepsi_coke(1) == '1'

def test_return_2():
    assert pepsi_coke(2) == '2'

def test_return_pepsi():
    assert pepsi_coke(3) == 'Pepsi'

def test_return_coke():
    assert pepsi_coke(5) == 'Coke'

def test_return_pepsi_multiple():
    assert pepsi_coke(6) == 'Pepsi'

def test_return_coke_multiple():
    assert pepsi_coke(10) == 'Coke'

def test_return_pepsi_coke_multiple():
    assert pepsi_coke(15) == 'PepsiCoke'