from flask import Flask, render_template,request,redirect,session
"""
Flask() allow you to create the app, render_template is used to render user.html
"""
app = Flask(__name__)

app.secret_key = "jaerij" # this concerns security

products = [
    {'name':'MacBook Pro','price':1299.99},
    {'name':'iPhone 8','price':699.99},
    {'name':'Amazon Echo','price':119.99}
]

@app.route('/')
def index():
    try:
        session['cart']
    except:
        session['cart']=[]
    return render_template("index.html",products=products)

@app.route('/add_item/[:item_id]',methods=['POST'])
def add_to_cart(item_id):
    try:
      session['cart'][item_id] += request.form['quantity']
    except:
      session['cart'][item_id] = request.form['quantity']
    return redirect('/')

app.run(debug=True)   #  run your application in debug mode