let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


for (var i=0;i<students.length;i++){
  console.log('Name: '+students[i].name+', Cohort: '+students[i].cohort+'\n');
}

//use for of loop
for (const student of students) {
  console.log(`name: ${ student.name }, cohort: ${ student.cohort }`)
};

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


for (let user in users){  // use for in loop to iterate objects
  console.log(user);
  console.log(user[0].last_name);
  /*for (var i=0; i<user.length;i++){
    console.log((i+1)+' - '+user[i].last_name);//+', '+user[i].first_name);
  }*/
}
/*for (var i=0;i<users.length;i++){
  console.log(users[i]);
  for(var j=0;j<users[i].length;j++){
    console.log(j + '-' + users[i][j].last_name);
  }
}*/

//console.log(users.employees[0].last_name);
