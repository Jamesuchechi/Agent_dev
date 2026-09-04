class Player:

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def show_score(self):
        print(self.name, "has", self.score, "points.")
        
player1 = Player("Alex", 100)

player1.show_score()