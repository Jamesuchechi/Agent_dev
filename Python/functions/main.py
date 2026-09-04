def greet(name="Hahbib"):
    print("Hello", name)

greet("Daniel")
greet("Ibrahim")
greet("James")
greet()


def add(a , b, c):
    print(a * b + c)

add(10,45, 4)

def introduce(name, age):
    print("My name is", name)
    print("I am", age, "years old.")

introduce(name="Yusuf", age=45)

def sum(a, b):
    return a + b

result = sum(100, 87)
print(result)