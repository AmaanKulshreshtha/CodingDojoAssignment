
from __future__ import unicode_literals
from django.shortcuts import render,redirect
from .models import User
from django.contrib import messages
# messages is django's way to flash a message on html

# Create your views here.
def index(request):
    return render(request, 'logreg/index.html')


def register(request):
    print request.POST # debug see what in post

    errs = User.objects.validate_registration(request.POST) # request.POST is dictionary object
    # get the returned error list
    if errs:
        for e in errs:
            messages.error(request, e)  # this is how django flash a message
    else:
        # if no error , then make a user:
        new_user = User.objects.create_user(request.POST)
        request.session['id'] = new_user.id
        messages.success(request,"Thank you {} for registering".format(new_user.username))
    return redirect('/')