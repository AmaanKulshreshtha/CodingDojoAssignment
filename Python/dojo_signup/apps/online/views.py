from django.shortcuts import render,redirect
from .models import User

# Create your views here.
def index(request):
    return render(request, "online/index.html")


def programinfo(request):
    users = User.objects.all()
    context = {
        "all_users" : users
    }
    return render(request,"online/online.html")


def process(request):
    print request.POST
    robot = False
    if request.POST['robot'] == 'on':  # if checkbox is checked
        robot = True
    User.objects.create(
        name = request.POST['name'],
        email = request.POST['email'],
        robot = robot
    )    #ORM
    return redirect('/programinfo')
