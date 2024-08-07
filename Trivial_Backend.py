from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)


@app.route('/dice')
def rollDice():
    value = random.randint(1, 6)
    return jsonify({"value": value})


@app.route('/database')
def getDatabase():
 
    database = teacher.data.database
    return jsonify(database)
    
@app.route('/questions')
def getQuestions():

    teach = Teacher("Ify","123456")

    teach.addC("Animal Trivia")
    teach.addQ("Animal Trivia", "What is the fastest land animal?", "Cheetah")
    teach.addQ("Animal Trivia", "What is the fastest aquatic animal?", "Sailfish")
    teach.addQ("Animal Trivia", "What is the largest animal on earth?", "Blue Whale")

    teach.addC("Space Trivia")
    teach.addQ("Space Trivia", "Which planet is closest to Earth?", "Venus")
    teach.addQ("Space Trivia", "What is the largest planet in our solar system?", "Jupiter")

    teach.addC("Sports Trivia")
    teach.addQ("Sports Trivia", "Where did the Olympic games originate?", "Greece")
    teach.addQ("Sports Trivia", "How many rings make up the Olympic rings?", "Five")
    teach.addQ("Sports Trivia", "In what sport can you get a hole in one?", "Golf")

    teach.addC("Weather Trivia")
    teach.addQ("Weather Trivia", "What is the hottest continent on earth?", "Africa")
    
    database = teach.data.database
    return jsonify(database)

@app.route('/')
def appData():

    teach = Teacher("Ify","123456")

    teach.addC("Addition")
    teach.addQ("Addition","What's 5 + 5 ?","10")
    teach.addQ("Addition","What's 10 + 10 ?","20")
    teach.addQ("Addition","What's 10 + 5 ?","15")
    teach.addQ("Addition","What's 0 + 5 ?","5")

    teach.addC("Subtraction")
    teach.addQ("Subtraction","What's 5 - 5 ?","0")
    teach.addQ("Subtraction","What's 10 - 5 ?","5")
    teach.addQ("Subtraction","What's 15 - 5 ?","10")
    teach.addQ("Subtraction","What's 25 - 5 ?","20")
        

    teach.addC("Multiplication")
    teach.addQ("Multiplication","What's 5 * 5 ?","25")
    teach.addQ("Multiplication","What's 10 * 5 ?","50")
    teach.addQ("Multiplication","What's 2 * 5 ?","10")
    teach.addQ("Multiplication","What's 4 * 5 ?","20")


    teach.addC("Division")
    teach.addQ("Division","What's 5 / 5 ?","1")
    teach.addQ("Division","What's 10 / 5 ?","2")
    teach.addQ("Division","What's 20 / 5 ?","4")
    teach.addQ("Division","What's 40 / 5 ?","8")


    player1 = Player("Matt","red")
    player1.setTurn()

    player2 = Player("Seth","blue")

    player3 = Player("Mal","green")

    player4 = Player("Andrew","yellow")
    players = [player1,player2,player3,player4]

    database = teach.data.database
    htmlstr = "<div>"
    
    for player in players:
        turn = "No"
        if(player.getTurn()):
            turn = "Yes"

        htmlstr += "<p>Player: " + player.getName() + " Color: " + player.getColor() + " Turn: " + turn + "</p> " 

    for key in database:
        htmlstr += "<h1>" +key+ "</h1>"
        for q in database[key]:
            htmlstr += "<p>Question: " + q + " Answer: " + database[key][q] + "</p>"
    htmlstr += "</div>"
    
    #print(htmlstr)
    return htmlstr

class Teacher:

    def __init__(self,name, teacherID):
        self.name = name
        self.ID = teacherID
        self.data = Database()

    def getName(self):
        return self.name
    
    def setName(self, name):
        self.name = name

    def getID(self):
        return self.ID
    
    def addC(self, category):
        self.data.addCategory(category)

    def addQ(self, category, q, a):
        if(category not in self.data.database.keys()):
            self.data.addCategory(category)
            self.data.addQuestion(category,q,a)
        else:
            self.data.addQuestion(category,q,a)

    def deleteC(self, category):
        if(category in self.data.database.keys()):
            self.data.deleteCategory(category)

    def deleteQ(self, category, q):
        if(category in self.data.database.keys()):
            if(q in self.data.database[category]):
                self.data.deleteQuestion(category,q)

    def showDatabase(self):    
        database = self.data.database

        for key in database:
            print("Category: ", key)
            for value in database[key]:
                print("Question: ",value," Answer: ", database[key][value])
            print("")
        print("------------------------------------------------------------")
        return
    
    def creation(self):
        
        print("Hello ",self.getName())
        print(" ")

        ans = ""
        while ans != "4":

            print("What would you like to do?")
            print("1. Add Category")
            print("2. Add Question")
            print("3. Show Database")
            print("4. Exit")
            ans = input(" ")

            if ans.strip() == "1":
                c = input("What is the name of the category you would like to add? ")
                self.addC(c)
                print(c," has been added to the database!")

            elif ans.strip() == "2":
                c = input("What category would you like to add the question to? (note that if the cateogry doesn't exist it will be created) ")
                q = input("What question would you like to add to: " + c + " ")
                a = input("What is the answer to that question? ")
                self.addQ(c,q,a)
                print("The question and answer have been successfuly added to the database!")

            elif ans.strip() == "3":
                print(" ")
                self.showDatabase()

            elif ans.strip() == "4":
                print("Thank you for using the database creator!")
            
            else:
                print("Invalid choice selected")

            print(" ")
            print(" ")

class Player:
    def __init__(self,name,color):
        self.name = name
        self.color = color
        self.answered = {"red": False, "blue": False, "green": False, "yellow": False}
        self.position = 0
        self.turn = False
        
    def getName(self):
        return self.name
    
    def setName(self, name):
        self.name = name

    def getColor(self):
        return self.color

    def setColor(self, color):
        self.color = color

    def getPos(self):
        return self.position
    
    def setPos(self,num):
        if(self.position + num <= 15):
            self.position += num
        else:
            self.position = (self.position + num) % 16

    def getTurn(self):
        return self.turn
    
    def setTurn(self):
        self.turn = not (self.turn)

    def answer(self, color, correct):
        if(correct):
            self.answered[color] = True
            self.turn = True
        else:
            self.turn = False

    def rollDice(self):
        return random.randint(1,6)


class Database:
    
    def __init__(self):
        self.database = {}
        
    def addCategory(self, name):
        self.database[name] = {}
        
    def addQuestion(self, category, q, a):
        self.database[category][q] = a
        
    def deleteCategory(self, category):
        del self.database[category]
        
    def deleteQuestion(self, category, q):
        del self.database[category][q]
        
    def getCategory(self, category):
        return self.database[category]
        
    def getQA(self, category, q):
        return [q,self.database[category][q]]
    
"""        
class Display:
    
    def __init__(self):
        self.visual = {"red": "", "blue": "", "green": "", "yellow": ""}
         
    def setCategories(self,red,blue,green,yellow):
        self.visual["red"] = red
        self.visual["blue"] = blue
        self.visual["green"] = green
        self.visual["yellow"] = yellow
        
    def show(self):
        print("Welcome to Trivial Compute")
        print("Color: red           Category: ",self.visual["red"])
        print("Color: blue          Category: ",self.visual["blue"])
        print("Color: green         Category: ",self.visual["green"])
        print("Color: yellow        Category: ",self.visual["yellow"])
"""

'''
class Gameplay:

    def __init__(self):

        teach = Teacher("Ify","123456")
        teach.addC("Additon")
        teach.addQ("Additon","What's 5 + 5 ?","10")
        teach.addQ("Additon","What's 10 + 10 ?","20")
        teach.addQ("Additon","What's 10 + 5 ?","15")
        teach.addQ("Additon","What's 0 + 5 ?","5")

        teach.addC("Subtraction")
        teach.addQ("Subtraction","What's 5 - 5 ?","0")
        teach.addQ("Subtraction","What's 10 - 5 ?","5")
        teach.addQ("Subtraction","What's 15 - 5 ?","10")
        teach.addQ("Subtraction","What's 25 - 5 ?","20")
        

        teach.addC("Multiplication")
        teach.addQ("Multiplication","What's 5 * 5 ?","25")
        teach.addQ("Multiplication","What's 10 * 5 ?","50")
        teach.addQ("Multiplication","What's 2 * 5 ?","10")
        teach.addQ("Multiplication","What's 4 * 5 ?","20")


        teach.addC("Division")
        teach.addQ("Division","What's 5 / 5 ?","1")
        teach.addQ("Division","What's 10 / 5 ?","2")
        teach.addQ("Division","What's 20 / 5 ?","4")
        teach.addQ("Division","What's 40 / 5 ?","8")

        teach.showDatabase()
            
        player1 = input("What is the name of player1? (red color) ")
        player1 = Player(player1,"red")
        player1.setTurn()
        player2 = input("What is the name of player2? (yellow color) ")
        player2 = Player(player2,"blue")
        player3 = input("What is the name of player3? (green color) ")
        player3 = Player(player3,"green")
        player4 = input("What is the name of player4? (blue color) ")
        player4 = Player(player4,"yellow")


        self.players = [player1,player2,player3,player4]
        self.categories = {"red": teach.data.database["Additon"], "blue": teach.data.database["Subtraction"], "green": teach.data.database["Multiplication"], "yellow": teach.data.database["Division"]}
        
        self.play()

    def play(self):

        curr = 0
        players = self.players
        print("Welcome to a new game of Trivial Compute!")
        print("")

        count = 0
        while self.checkWin() == False and count < 10:
            
            print("The current player is: ", players[curr].getName())
            print("Roll the dice!")
            print(" ")
            players[curr].setPos(players[curr].rollDice())
            spot = players[curr].getPos()

            if (spot + 1) % 4 == 0:
                print("Landed on Red")
                print(" ")
                print("Pick a quesiton: ")
                print(" ")
                for value in self.categories["red"]:
                    print(value)
                x = input("")
                print("The question you chose was: ")
                y = input(x+" ").strip()

                print(" ")
                ans = self.categories["red"][x]
                print("The answer to your question is: ",ans)

            elif (spot + 1) % 4 == 1:
                print("Landed on Blue")
                print(" ")
                print("Pick a quesiton: ")
                print(" ")
                for value in self.categories["blue"]:
                    print(value)
                x = input("").strip()
                print("The question you chose was: ")
                y = input(x+" ").strip()

                print(" ")
                ans = self.categories["blue"][x]
                print("The answer to your question is: ",ans)

            elif (spot + 1) % 4 == 2:
                print("Landed on Green")
                print(" ")
                print("Pick a quesiton: ")
                print(" ")
                for value in self.categories["green"]:
                    print(value)
                x = input("").strip()
                print("The question you chose was: ")
                y = input(x+" ").strip()

                print(" ")
                ans = self.categories["green"][x]
                print("The answer to your question is: ",ans)
            
            else:
                print("Landed on Yellow")
                print(" ")
                print("Pick a quesiton: ")
                print(" ")
                for value in self.categories["yellow"]:
                    print(value)
                x = input("").strip()
                print("The question you chose was: ")
                y = input(x+" ").strip()

                print(" ")
                ans = self.categories["yellow"][x]
                print("The answer to your question is: ",ans)
            
            if y.strip() != ans.strip():
                players[curr].setTurn()
                curr += 1

                if curr > 3:
                    curr = 0

            else:
                print("You were correct roll again!")

            
            count += 1

    def checkWin(self):

        for player in self.players:
            count = 0
            for key in player.answered:

                if player.answered[key] == True:
                    count += 1
            
            if count == 4:
                print("Player: ",player.getName()," wins!!!")
                return True
            
        return False
'''

teacher = Teacher("I","12345")

if __name__=="__main__":
    
    #game = Gameplay()
    #teacher.creation()
    appData()
    app.run()