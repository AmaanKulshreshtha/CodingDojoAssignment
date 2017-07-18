import random,datetime
from flask import Flask, render_template,request,redirect,session
"""
Flask() allow you to create the app, render_template is used to render user.html
"""
app = Flask(__name__)

app.secret_key = "ThisMustBeSuperSecret" # this concerns security

#app.gold = 0

@app.route('/')
def index():
    session.clear()  # when at home page, clear session cache so that gold and message is empty
    return render_template("index.html")


@app.route('/process_money', methods=['POST'])
def ninja_gold():
    print 'Process Activities...'
    earn = 0
    msg =''
    ts = datetime.datetime.now().strftime("%Y/%m/%d %I:%M %p")
    if request.form['building'] == 'farm':
        print 'Start Farm activity...'
        earn = random.randint(10,20)
        print 'earn= ', earn
        msg += 'Earned {} golds from the farm! {} '.format(earn,ts)

    elif request.form['building'] == 'cave':
        print 'Start cave activity...'
        earn = random.randint(5,10)
        print 'earn= ', earn
        msg += 'Earned {} golds from the cave! {}'.format(earn,ts)

    elif request.form['building'] == 'house':
        print 'Start house activity...'
        earn = random.randint(2, 5)
        print 'earn= ', earn
        msg += 'Earned {} golds from the house! {}'.format(earn,ts)

    elif request.form['building'] == 'casino':
        print 'Start casino activity...'
        msg += 'Entered a casino and '
        earn = random.randint(-50,50)
        print 'earn= ',earn
        if earn < 0:
            msg += 'lost {} golds...Ouch! {}'.format(earn,ts)
        else:
            msg += 'take {} golds...Feel Lucky! {}'.format(earn,ts)

    else:
        print 'Unrecognized activity...Error!!!'

    # try to update session['balance']
    try:
        # update gold balance by earn amount
        session['goldbalance'] += earn

    except KeyError:  # there was no goldbalance found, start it
        session['goldbalance'] = earn

    try:
        # update activity textarea by concate msg
        session['activity'] += msg + '\n'
    except KeyError:
        session['activity'] = msg + '\n'

    return render_template('index.html', goldbalance=session['goldbalance'], activity=session['activity'])
    # redirect back to '/'

app.run(debug=True)   #  run your application in debug mode