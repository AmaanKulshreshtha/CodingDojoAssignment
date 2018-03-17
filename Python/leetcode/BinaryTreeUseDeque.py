from collections import deque
class Node:

    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None
        self.level = None


    def __str__(self):
        return str(self.data)

    def insert(self, data):
        """
            insert new node with data
            :param data:
            :return:
        """
        if self.data:  # data not null
            if data < self.data:
                if self.left is None:
                        self.left = Node(data)  # became left
                else:
                        self.left.insert(data)  # recursive insert
            elif data > self.data:
                if self.right is None:
                        self.right = Node(data)
                else:
                        self.right.insert(data)
            else:
                    self.data = data

    def lookup(self, data, parent=None):
            """
                    Lookup node containing data
                    @param data node data object to look up
                    @param parent node's parent, set to None if skip, (this is root node)
                    @returns node and node's parent if found or None, None
            """

            if data < self.data:
                if self.left is None:
                    return None, None
                return self.left.lookup(data, self)
            elif data > self.data:
                if self.right is None:
                    return None, None
                return self.right.lookup(data, self)
            else:
                return self, parent

    def delete(self, data):
            """
            Delete node containing data
            :param data: node's content to delete
            :return: none
            """
            node, parent = self.lookup(data)
            if node is not None:
                child_count = node.children_count()
                # case 1 , no child
                if child_count == 0:
                    if parent:
                        if parent.left is node:
                            parent.left = None
                        else:
                            parent.right = None
                    else:  # no parent simply clearing data
                        self.data = None

                # case 2, 1 child
                elif child_count == 1:
                    if node.left:
                        n = node.left
                    else:
                        n = node.right

                    if parent:
                        if parent.left is node:
                            parent.left = n
                        else:
                            parent.right = n
                        del node
                    else:
                        self.left = n.left
                        self.right = n.right
                        self.data = n.data

                # case 3 , both L and R child
                elif child_count == 2:
                    parent = node
                    successor = node.right
                    while successor.left:
                        parent = successor
                        successor = successor.left
                    # replace node data by its successor data
                    node.data = successor.data
                    # fix successor parent child
                    if parent.left == successor:
                        parent.left = successor.right
                    else:
                        parent.right = successor.right

    def children_count(self):
            """Return the number of children"""
            count = 0
            if self.left:
                count += 1
            if self.right:
                count += 1
            return count


    # breath first traversal
def BFT(node):
    node.level = 1
    queue = deque([node]) # pass list to create empty double ended queue
    output = []
    current_level = node.level

    while len(queue) > 0:
        current_node = queue.popleft() # return leftmost node

        if( current_node.level > current_level ):
            output.append("\n")
            current_level += 1

            output.append(str(current_node))

        if current_node.left:
            current_node.left.level = current_level + 1
            queue.append(current_node.left)

        if current_node.right:
            current_node.right.level = current_level + 1  # move down the tree, level goes up by 1
            queue.append(current_node.right)

    return ' '.join(output)


graph = {'A': set(['B', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E'])}


def dfs(graph, start):
    visited, stack = set(), [start]
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            print(graph[vertex])
            stack.extend(graph[vertex] - visited)
    return visited

if __name__ == '__main__':
        # root = Node(8)
        # root.insert(7)
        # root.insert(12)
        # root.insert(4)
        # root.insert(5)
        # root.insert(6)
        # root.insert(9)
        # root.insert(10)
        # print(root)
        #
        # bft_result = BFT(root)
        # print(bft_result)

        #dfs(graph,'A')
        root = Node(3)
        root.insert(9)
        root.insert(20)
        root.insert(15)
        root.insert(7)

        print(root)