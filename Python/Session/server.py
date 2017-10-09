from flask import Flask, render_template,request,redirect,session
"""
Flask() allow you to create the app, render_template is used to render user.html
"""
app = Flask(__name__)
app.secret_key = "secretKey" # this concerns security

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users',methods=['POST'])
def create_user():
    print 'Got Post Info'
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    print type(session)
    return redirect('/show') # redirect back to '/'

@app.route('/show')
def show_user():
    return render_template('user.html',name=session['name'],email=session['email'])

app.run(debug=True)   #  run your application in debug mode