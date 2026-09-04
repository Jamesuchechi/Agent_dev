class BankAccount:

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds.")

    def show_balance(self):
        print(self.owner, "has", self.balance)
account = BankAccount("Alex", 1000)
account.deposit(500)
account.withdraw(200)
account.show_balance()