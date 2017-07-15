from flask import Flask, render_template, request,redirect
"""
Flask() allow you to create the app, render_template is used to render index.html
"""

app = Flask(__name__)

@app.route('/')   # default route usually point to index.html
def index():
    return render_template('index.html')


@app.route('/users', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        print "HTTP method is POST, now processing Post Info"
    else:
        print 'HTTP method is not POST!'

    # rendering the page directly with values obtained from form
    return render_template('result.html',name=request.form['name'],location=request.form['location'],language=request.form['language'],comment=request.form['comment'])

app.run(debug=True)   #  run your application in debug mode