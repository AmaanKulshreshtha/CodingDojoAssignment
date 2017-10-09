if __name__ == '__main__':
    # list of dictionaries
    students = [ {'first_name':  'Michael', 'last_name' : 'Jordan'}, {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}]

    for student in students:
        print student['first_name']+' '+student['last_name']


    # dictionarys of dictionaries ( key'stu/ins':value(lists of first name and last name dictionaries) )
    users = {
     'Students': [
         {'first_name': 'Michael', 'last_name' : 'Jordan'},
         {'first_name': 'John', 'last_name' : 'Rosales'},
         {'first_name': 'Mark', 'last_name' : 'Guillen'},
         {'first_name': 'KB', 'last_name' : 'Tonel'}
      ],
     'Instructors': [
         {'first_name' : 'Michael', 'last_name' : 'Choi'},
         {'first_name' : 'Martin', 'last_name' : 'Puryear'}
      ]
    }

    for user in users:
        print user + '/n'
        # for in users[user]
        counter = 1
        # for loop through all names in Students
        for i in range(len(users[user]):
            # print str(i)+"-"+users[user] #Students
        #for names in users['Students']:
         #   print
        #
