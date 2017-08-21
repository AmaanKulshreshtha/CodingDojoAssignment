"""
Blogs\Views.py handle all request to \blogs
"""

from django.shortcuts import render, HttpResponse, redirect


# the index function is called when root is visited
def index(request):
    #response = "placeholder to later display all the list of blogs"
    #return HttpResponse(response)
    context = {
        "email" : "blog@gmail.com",
        "name" : "mike"
    }
    return render(request,"blogs/index.html",context)


def new(request):
    response = "placeholder to display a new form to create a new blog"
    return HttpResponse(response)


def create(request):
    return redirect('/blogs')


def show(request,number):
    response = "placeholder to display blog {}".format(number)
    return HttpResponse(response)

def edit(request,number):
    response = "placeholder to edit blog {}".format(number)
    return HttpResponse(response)

def destroy(request,number):
    return redirect('/blogs')