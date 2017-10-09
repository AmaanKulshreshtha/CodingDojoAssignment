from flask import Flask, render_template,request,redirect,session
import random
"""

"""
app = Flask(__name__)
app.secret_key = "ThisMustBeSuperSecret" # this concerns security
random_number = random.randrange(0,101) # randome number for compare
@app.route('/')
def index():
    if 'target' not in session:
        session['target'] = random.randint(1,101)
        print session['target']
    return render_template("index.html") # home page

@app.route('/users',methods=['POST'])
def user_guess():

    number_input = request.form['guess']
    print number_input

    if int(number_input)>session['target']:
        session['message']='Too High'
        print session['message']

    elif int(number_input)<session['target']:
        session['message']='Too Low'
        print session['message']

    else:
        session['message']='correct'
        print session['message']

    return redirect('/') # redirect back to '/'

@app.route('/winner')
def winner():
    session.pop('target') # clean the session dict
    session.pop('message')
    return redirect('/')

app.run(debug=True)   #  run your application in debug mode