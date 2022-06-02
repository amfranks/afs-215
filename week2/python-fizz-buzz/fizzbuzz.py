def pepsi_coke(num = 0):

    if num == 3:
        return 'Pepsi'
    if num == 5:
        return 'Coke'
    if num % 3 == 0 and num % 5 == 0:
        return 'PepsiCoke'
    if num % 3 == 0:
        return 'Pepsi'
    if num % 5 == 0:
        return 'Coke'
    else:
        return str(num)