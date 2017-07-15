from flask import Flask, render_template, request,redirect
"""
Flask() allow you to create the app, render_template is used to render user.html
"""

app = Flask(__name__)

@app.route('/show')
def show_user():
    return render_template('user.html',name='Jay',email='kpatel@codingdojo.com')

app.run(debug=True)   #  run your application in debug mode