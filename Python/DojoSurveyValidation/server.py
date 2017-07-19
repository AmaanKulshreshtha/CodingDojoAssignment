from flask import Flask, render_template, request,redirect, flash
"""
Flask() allow you to create the app, render_template is used to render index.html
"""

app = Flask(__name__)
app.secret_key = 'KeepItSecret'


@app.route('/')  # default route usually point to index.html
def index():
    return render_template('index.html')


@app.route('/process', methods=['POST'])
def process():
    # validate if name is empty
    if len(request.form['name']) < 1:
        flash("Name cannot be empty! ")
        return redirect('/')
    elif len(request.form['comment']) < 1:
        flash("You must leave comment! ")
        return redirect('/')
    elif len(request.form['comment']) > 120:
        flash("Comment cannot exceed 120 characters!")
        return redirect('/')
    else:  # rendering the page directly with values obtained from form
        return render_template('result.html',name=request.form['name'],location=request.form['location'],language=request.form['language'],comment=request.form['comment'])

app.run(debug=True)   #  run your application in debug mode