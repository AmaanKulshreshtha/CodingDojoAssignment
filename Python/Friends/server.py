from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    print type(mysql)
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html',all_friends=friends)


@app.route('/friends/<friend_id>')
def show(friend_id):
    # write query to select specific user by id. At every point where
    # we want to insert data ( session.execute(text (query), {'key':value}) http://docs.sqlalchemy.org/en/latest/orm/session_api.html)
    #  we write ":" and variable name.
    query = "SELECT * FROM friends WHERE id = :specific_id"

    # Then define a dictionary with key that matches :variable_name in query
    data = {'specific_id':friend_id}
    #  here the key is the part after : in my select statment, and value will be
    # passed thru function parameter

    # execute query , friends is a list
    friends = mysql.query_db(query,data)
    return render_template('index.html', one_friend=friends[0], friend_id=friend_id)

# get form data and insert it into database
@app.route('/friends', methods=['POST'])
def create():
    # add a friend to the database!
    print request.form['first_name']
    print request.form['last_name']
    print request.form['occupation']
    # we want to insert into out query
    query = "INSERT INTO friends (first_name,last_name,occupation,created_at,updated_at) VALUES(:first_name,:last_name,:occupation,NOW(),NOW())"
    # we will then create a dictionary of data from the POST data received.
    data = {
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'occupation':request.form['occupation']
    }
    # Run query
    mysql.query_db(query,data)
    return redirect('/')

# Update Existing Records
@app.route('/update_friend',methods=['POST'])
def update():
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, occupation = :occupation WHERE id = :id"
    data = {
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'occupation':request.form['occupation'],
        'id':request.form['friend_id']
    }
    mysql.query_db(query,data)
    return redirect('/')


@app.route('/remove_friend', methods=['POST'])
def delete():
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': request.form['friend_id']}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
