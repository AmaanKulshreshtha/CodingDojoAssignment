class Car(object):
    def __init__(self,_price,_speed,_fuel,_mileage):
        self.price = _price
        self.max_speed = _speed
        self.fuel = _fuel
        self.mileage = _mileage

        if(_price > 10000):
            self.tax = .15
        else:
            self.tax = .12

    def display_all(self):
        print 'Price = ',str(self.price)+'\n'
        print 'Max Speed = ',str(self.max_speed)+'\n'
        print 'Fuel level = ',str(self.fuel)+'\n'
        print 'Mileage = ',str(self.mileage)+'\n'
        print 'Tax rate = ',str(self.tax)+'\n'
        print '*    *   *   *   *   *   *   *   *   *   *   *   *   *'
if __name__ == '__main__':
    MyCar = Car(24000,260,'12 gallon',30)
    MyCar.display_all()

    Porsche911 = Car(89400,300,'Full',28)
    Porsche911.display_all()

    Corvette2017 = Car(65495,200,'Full',25)
    Corvette2017.display_all()

    JapanWarGod = Car(115285,300,'Full',22)
    JapanWarGod.display_all()

