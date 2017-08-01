def hammingDistance(x,y):
    # convert int to bits
    return bin(x^y).count('1')


def hamming_distance(s1,s2):
    if len(s1)!=len(s2):
        raise ValueError("Sequences are not in equal length!")
    return sum(el1!=el2 for el1,el2 in zip(s1,s2))

def whatsZip():
    x = [1,2,3]
    y = [4,5,6]
    zipped = zip(x,y)
    print zipped
    for val1, val2 in zipped:
        print val1,val2

if __name__ == '__main__':
   num = 4
   num2 = 1
   print bin(num)
   print bin(num2)
   #whatsZip()
   #str1 = '1011101'
   #str2 = '1001001'
   #distance = hamming_distance(str1,str2)
   b1 = 2
   b2 = 8
   distance = hammingDistance(b1,b2)
   print distance

