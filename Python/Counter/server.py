from flask import Flask, render_template,request,redirect,session
"""
Flask() allow you to create the app, render_template is used to render user.html
"""
app = Flask(__name__)

app.secret_key = "secret" # this concerns security

@app.route('/')  # everytime i visit this page update counter +1
def index():
   try:
    session['counter']+=1
   except KeyError:   # if the key cannot be found means that counter did not exist yet ! , so we can use except to help initiate it
    session['counter']=1
   #First if there is no counter , initiate it as counter = 1 if there is , then retrieve it - 1,  then update it by
   return render_template("index.html", counter = session['counter'])


@app.route('/addtwo',methods=['POST'])
def Add_Two():
    print 'Add Two'
    session['counter']+=2
    return redirect('/')

@app.route('/reset',methods=['POST'])
def Reset():
    print 'reseting'
    session.clear();
    return redirect('/')
app.run(debug=True)   #  run your application in debug mode