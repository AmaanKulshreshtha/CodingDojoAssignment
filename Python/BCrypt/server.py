from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt()
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    print type(mysql)
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html',all_friends=friends)

# get form data and insert it into database
@app.route('/friends', methods=['POST'])
def create():
    print request.form['first_name']
    print request.form['last_name']
    print request.form['email']
    # we want to insert into out query
    query = "INSERT INTO friends (first_name,last_name,email,created_at,updated_at)values(:first_name,:last_name,:email,NOW(),NOW())"
    # we will then create a dictionary of data from the POST data received.
    data = {
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'email':request.form['email']
    }
    # Run query
    mysql.query_db(query,data)
    return redirect('/')

# <id> here is like a placeholder, it doesn't need to match with the one in HTML
@app.route('/friends/<id>/edit',methods=['GET'])
def edit(id):
    print 'In edit. id= ',id
    # write query to select specific user by id. At every point where
    # we want to insert data ( session.execute(text (query), {'key':value}) http://docs.sqlalchemy.org/en/latest/orm/session_api.html)
    #  we write ":" and variable name.
    query = "SELECT * FROM friends WHERE id = :specific_id"

    # Then define a dictionary with key that matches :variable_name in query
    data = {'specific_id':id}
    #  here the key is the part after : in my select statment, and value will be
    # passed thru function parameter

    # execute query , friends is a list of dictionary
    friend = mysql.query_db(query,data)
    print 'in edit, friend= ', friend
    first_name = friend[0]['first_name']  # retrieve value for each key
    last_name = friend[0]['last_name']
    email = friend[0]['email']
    return render_template('edit.html', first_name=first_name, last_name=last_name,email=email, id=id)

@app.route('/friends/<id>/delete', methods=['POST'])
def delete(id):
    print 'In delete, id = ', id
    # write query to delete based on id
    query = "DELETE FROM friends WHERE id = :specific_id"

    data = {'specific_id':id}
    mysql.query_db(query, data)
    return redirect('/')

# Update Existing Records
@app.route('/friends/<id>',methods=['POST'])
def update(id):
    print 'begin update, id= ',id
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
    data = {
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'email':request.form['email'],
        'id':id
    }
    mysql.query_db(query,data)
    return redirect('/')



app.run(debug=True)
