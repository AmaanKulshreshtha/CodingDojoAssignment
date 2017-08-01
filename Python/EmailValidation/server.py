import re
from flask import Flask, render_template, request,redirect, flash
from mysqlconnection import MySQLConnector
"""
Flask() allow you to create the app, render_template is used to render index.html
"""

app = Flask(__name__)
mysql = MySQLConnector(app,'emailvalidation') # we bind the app with this database
app.secret_key = 'KeepItSecret'
EMAIL_REGEX = re.compile(r"^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z0-9]+$")

@app.route('/')  # default route usually point to index.html
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
     # query for checking if email address already entered
    exists = "SELECT * From emails WHERE email_address = :email"
    data = {
        'email':request.form['email']
    }
    results = mysql.query_db(exists,data)

    # validate if name is empty
    if len(request.form['email']) < 1:
        flash("Email cannot be empty! ")
        return redirect('/')

    elif not EMAIL_REGEX.match(request.form['email']):
        flash("NOT A VALID email address! ")
        return redirect('/')

    elif results: # results list is not empty
        flash("Email address already exists! ")
        return redirect('/')

    else:
        # create insert query
        query = "INSERT INTO emails (email_address,created_at,updated_at) VALUES (:email,NOW(),NOW())"
        data = {
            'email':request.form['email']
        }
        # Run insert query
        mysql.query_db(query,data)
        # Fetching all emails we have
        emails = mysql.query_db("SELECT * FROM emails")
        # rendering the page directly with values obtained from form
        return render_template('result.html',email=request.form['email'],all_emails=emails)

app.run(debug=True)   #  run your application in debug mode