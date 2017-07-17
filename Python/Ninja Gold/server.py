from flask import Flask, render_template,request,redirect,session
"""
Flask() allow you to create the app, render_template is used to render user.html
"""
app = Flask(__name__)

app.secret_key = "ThisMustBeSuperSecret" # this concerns security

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process',methods=['POST'])
def Hidden_Inputs():
    print 'Process Submit'
    if request.form['action'] == 'register':
        print 'Start Register code...'
    elif request.form['action'] == 'login':
        print 'Start login code...'
    else:
        print 'unknow action...Error'

    return redirect('/') # redirect back to '/'

app.run(debug=True)   #  run your application in debug mode