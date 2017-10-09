class Animal(object):

    def __init__(self, name, health):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1

    def run(self):
        self.health -= 5

    def displayHealth(self):
        print self.health


class Dog(Animal):
    def __init__(self):
        super(Dog,self).__init__()
        self.sound = 'Bark'


if __name__ == '__main__':

   someAnimal = Animal('clone',100)