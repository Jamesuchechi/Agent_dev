password = []

while password != "abc123":
    password = input("Enter your password:")
    if password == "james":
        print("wrong password, try again")
    elif password == "Ibrahim":
        print("Wrong password, You have 3 attempts left.")
    elif password == "Daniel":
        print("Wrong passowrd, 2 attempt left")
    elif password == "abc123":
        print("Login Susscessful, Redirecting to Dashbaord..")
    else:
        print("Access Denied, your account have being blocked.")