import collections
from collections import deque

""""
BASICS
"""
def factorial(n):
    if n==0:
        return 1
    else:
        return n * factorial(n-1)


"""
B Tree
"""
def BinarySearch(data, target, low, high):
    """

    :param data:
    :param target:
    :param low:
    :param high:
    :return: true if target found in Python's list
    """
    #data is empty
    if data is None or (low > high):
        return False
    else:
        mid = (low + high)// 2 # floor division get whole number
        if target == data[mid]:
            return True
        elif target > data[mid]:
            return BinarySearch(data, target, mid+1, high)
        else:
            return BinarySearch(data, target, low, mid-1)


import os

def disk_usage(path):
    total = os.path.getsize(path) # size for current entry

    if os.path.isdir(path): # if there is child entries under current path
        for filename in os.listdir(path):  # loop through child entries
            childpath = os.path.join(path, filename)
            total += disk_usage(childpath)

    print('{0: < 7}'.format(total), path)
    return total


"""
 Stack
"""
class Empty(Exception):
     """
      Error attempting to access an element from an empty container
     """
     pass

class Stack:

    def __init__(self):
        self._data = [] # initiate empty stack

    def len(self):
        return len(self._data)

    def push(self, e):
        self._data.append(e)  # list's append add element to the right

    def top(self):
        """return the top elelment of stack"""
        if self.isEmpty():
            raise Exception('stack is empty')
        return self._data[-1]

    def pop(self):
        if self.isEmpty():
            raise Exception('stack is empty')

        return self._data.pop()  # list's pop remove the rightmost element

    def isEmpty(self):
        return len(self._data) == 0

def reverse_file(filename):
    S = Stack()
    original = open(filename)
    for line in original:
        S.push(line.rstrip('\n'))
    original.close()

    # now we overwrite with contents in lIFO order
    output = open(filename, 'w')
    while not S.isEmpty():
        output.write(S.pop())
    output.close()

def is_matched(expr):
    """
    Return true if all delimiters are properly matching
    :param expr:
    :return:
    """
    lefty = "({["
    righty =  ")}]"
    S =Stack()
    for ch in expr:
        print('type of ch is')
        print( type(ch) )
        if ch in lefty:     # left parenthesis push to stack
            S.push(ch)
        elif ch in righty:   # char is a right parenthesis
            if S.isEmpty():  # there is still right char but no more lefty left in stack
                return False
            if righty.index(ch)!=lefty.index(S.pop()):
                return False
    return S.isEmpty()

"""
 Queue
 Q.enqueue--add stuff to the back of Q
 Q.dequeue--delete from the front of the Q
 len--number of elements
 is_Empty
 first--get to the front of Q
 
 implementation using List
"""

class Queue:

    DEFAULT_CAPACITY = 10

    def __init__(self):
        self._data = [None] * Queue.DEFAULT_CAPACITY # create empty queue with default size
        self._size = 0    # the number of elements that currently stored in the queue
        self._front = 0   # index for the 1st element

    def __len__(self):
        return self._size

    """ Remove element from the FRONT of Q """
    def dequeue(self):
        if self.is_emtpy():
            raise Exception('Q is empty')
        answer = self._data[self._front]
        self._data[self._front] = None # remove the data
        self._front = (self._front + 1) % len(self._data) # formula for advancing front index
        self._size-=1
        return answer

    """ Add element to the back of Q """
    def enqueue(self, e):
        """ Add an element to back of queue """
        """ three cases: 1. elements = capacity of Q ,   2. elements exceeds capacity 3. elements less than capacity """
        if self._size == len(self._data):  # when reaching the capacity u need to enlarge the cap
            self._resize(2 * len(self._data)) # double the capacity
        avail = (self._front + self._size) % len(self._data)
        self._data[avail] = e
        self._size += 1

    def _resize(self, cap):
        """ Resize to a new list of capacitys assume cap >= len(self) """
        backup = self._data
        self._data=[None] * cap
        walk = self._front
        for k in range(self._size): # only considering existing elements
            self._data[k] = backup[walk]
            walk = (1 + walk) % len(backup) # advancing front in the backup
        self._front = 0 # initiate front index for the resized

    def is_emtpy(self):
        return self._size == 0

    def first(self):
        if self.is_emtpy():
            raise Exception('Queue is empty')
        return self._data[self._front]

    def last(self):
        return self._data[-1]


#singly linked list
class LinkedStack:

    class _Node:
        def __init__(self, element, next):
            self._element = element
            self._next = next  # when creating node u can also point to next node

    def __init__(self):
        self._head = None
        self._size = 0

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def push(self, e):
        self._head = self._Node(e,self._head) # create node with e and point to the old head
        self._size += 1

    def top(self):
        """return the element at top of stack"""
        if self.is_empty():
            raise Exception("linked list is empty")
        return self._head._element

    def pop(self):
        if self.is_empty():
            raise Exception("linked list is empty")
        answer = self._head._element
        self._head = self._head._next
        self._size -= 1

        return answer


# linked list with Queue
class LinkedQueue:
    class _Node:
        def __init__(self, element, next):
            self._element = element
            self._next = next  # when creating node u can also point to next node

    def __init__(self):
        self._head=None
        self._tail=None
        self._size=0

    def isEmpty(self):
        return self._size==0

    def first(self):
        if self.isEmpty():
            raise Exception('Queue is empty')
        return self._head._element

    def dequeue(self):
        """remove and return the 1st element"""
        if self.isEmpty():
            raise Empty('Queue is empty')
        answer = self._head._element
        self._head = self._head._next
        self._size -= 1
        if self.isEmpty():
            self._tail = None
        return answer


    def enqueue(self,e):
        newest = self._Node(e,None)
        if self.isEmpty():
            self._head=newest
        else:
            self._tail._next = newest
        self._tail = newest
        self._size += 1


class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def deleteNode(self, ListNode):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead
        """

        if ListNode.next is None:
            raise Exception("list is empty")
        ListNode.val = ListNode.next.val
        ListNode.next = ListNode.next.next


def intersection(nums1, nums2):
    if nums1 and nums2:
        set1 = ()
        set2 = ()
        set1 = set(nums1)
        set2 = set(nums2)

    return list(set1 & set2)


def twoSum(nums, target):
    if len(nums)<=1:
        return False
    buff_dict = {}
    for i in range(len(nums)):
        if nums[i] in buff_dict:
            return [buff_dict[nums[i]], i ]
        else:
            buff_dict[target - nums[i]] = i


def and_chk( S, T):
    if not ( S and T):  # if either S or T is None or False, it returns True
        return True
    return False


def or_chk( S, T):
    if not S or not T:
        return True
    return False

if __name__ == '__main__':
    # data = [2,4,5,7,8,9,12,14,17,19,22,25]
    # result = BinarySearch(data, 17, 0, 11)
    # print (result)
    # path = "/Users/edwardsun"
    # disk_usage(path)
    # file = "/Users/edwardsun/Documents/test.txt"
    # reverse_file(file)
    #expr =   '{[]}'
    # test = is_matched(expr)
    # print(test)
    S = True
    T = False

    print( and_chk(S, T) )

    print( or_chk(S, T) )

    nums = [2, 7, 11, 15]
    result = twoSum(nums, 9)


    nums = [3, 6, 9, 2]
    result = twoSum(nums, 11)
    Q = Queue()
    Q.enqueue(1)
    Q.enqueue(2)
    Q.enqueue(3)
    Q.enqueue(4)
    print('Q size is '+str(Q._size))
    Q.enqueue(5)
    Q.enqueue(6)
    Q.enqueue(7)
    Q.enqueue(8)
    Q.enqueue(9)
    print('Q size is ' + str(Q._size))

    dq = collections.deque()
    dq.appendleft(1)
    dq.appendleft(2)
    dq.appendleft(3)
    dq.appendleft(4)
    dq.appendleft(5)
    print(dq)

    # dq.rotate(2)
    poped = dq.popleft()
    print('poped = '+str(poped))
    print(dq)

    dq.append(6)
    print(dq)

    nums1 = [1,2,2,3]
    nums2 = [2,2]

    answer = intersection(nums1, nums2)
    print(answer)