from decimal import *

class product(object):

    def __init__(self,_price,_item_name,_weight,_brand,_cost,_status="for sale"):
        self.price=_price
        self.item_name=_item_name
        self.weight=_weight
        self.brand=_brand
        self.cost=_cost
        self.status=_status

    def sell(self):
        self.status = "sold"
        return self

    def addTax(self,_tax):
        dec = Decimal(_tax)
        return self.price * ( 1 + dec )

    def Return(self,_reason):

        if _reason is "defect":
            self.status = "defective"
            self.price = 0
        elif _reason is "like new":
            self.status = "for sale"
        elif _reason is "opened":
            self.status = "used"
            self.price -= self.price * .2
        else:
            self.status = 'Fraud Return'

    def DisplayInfo(self):
        print 'Price= ',str(self.price)+'\n'
        print 'Item= ',self.item_name+'\n'
        print 'Weight= ',self.weight+'\n'
        print 'Brand= ',self.brand+'\n'
        print 'Cost= ',str(self.cost)+'\n'
        print 'Status= ',self.status+'\n'

if __name__ == '__main__':
    MyLaptop = product(500,'HP laptop','2 LB','HP',200,'Used')
    MyLaptop.DisplayInfo()

    taxPrice = MyLaptop.addTax(.28)
    print taxPrice

    MyLaptop.Return("opened")
    MyLaptop.DisplayInfo()