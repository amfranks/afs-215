# def python_kata(num):
#     if (num == 1):
#         return "1"
#     if (num == 2):
#         return "2"
#     if (num == 3):
#         return "Pepsi"
#     if (num == 5):
#         return "Coke"

# print(python_kata(1))
# print(python_kata(2))
# print(python_kata(3))
# print(python_kata(5))

def python_kata(num):
    if (num % 3 == 0 and (num % 5 != 0)):
        return "Pepsi"
    if (num % 5 == 0 and (num % 3 != 0)):
        return "Coke"
    if (num % 3 == 0 and num % 5 == 0):
        return "PepsiCoke"

print(python_kata(6))
print(python_kata(10))
print(python_kata(15))