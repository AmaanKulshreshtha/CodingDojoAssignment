from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import md5

app = Flask(__name__)
mysql = MySQLConnector(app,'encryptpw')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users/create', methods=['POST'])
def create_user():
     username = request.form['username']
     email = request.form['email']
     password = md5.new(request.form['password']).hexdigest();
     insert_query = "INSERT INTO users (username, email, password, created_at, updated_at) VALUES (:username,:email, :password, NOW(), NOW())"
     query_data = { 'username': username, 'email': email, 'password': password }
     mysql.query_db(insert_query, query_data)