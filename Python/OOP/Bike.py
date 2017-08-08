class Bike(object):
    #constructor
    def __init__(self,_price,_max_speed): # new object with miles = 0 as default
        self.price = _price
        self.max_speed = _max_speed
        self.miles = 0

    def displayInfo(self):
        print 'price = ',str(self.price)+'\n'
        print 'maximum speed = ',self.max_speed+'\n'
        print 'total miles = ',str(self.miles)+' miles'

    def ride(self):
        print 'Riding by 10...'
        self.miles+=10

    def reverse(self):
        print 'reversing by 5...'
        if self.miles -5 >= 0:
            self.miles-=5
        else:
            print 'You cannot reverse to below 0 miles ! '


if __name__ == '__main__':
    myBike = Bike(180,'58mph')
    for i in range(3):
        myBike.ride()

    for i in range(7):
         myBike.reverse()
    myBike.displayInfo()